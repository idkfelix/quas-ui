import fs from "node:fs";
import path from "node:path";
import { exec } from "node:child_process";
import { registrySchema, type Registry } from "shadcn-svelte/schema";
import pkg from "../package.json" with { type: "json" };

type RegistryItems = Registry["items"];
type RegistryItemFiles = Registry["items"][number]["files"];

function log(message: string): void {
	console.log(`\x1b[31m[Registry]\x1b[0m ${message}`);
}

export function build(): void {
	const registryRootPath = path.resolve("src", "lib", "registry");
	const paths = {
		ui: path.resolve(registryRootPath, "ui"),
		hooks: path.resolve(registryRootPath, "hooks"),
		blocks: path.resolve(registryRootPath, "blocks"),
	};

	const result = registrySchema.parse(
		{
			$schema: "https://shadcn-svelte.com/schema/registry.json",
			name: pkg.name,
			homepage: pkg.homepage,
			items: [crawlUI(paths.ui), crawlHooks(paths.hooks)].flat(),
		} as Registry,
		{ jitless: true }
	);

	log("writing registry.json");
	const cwd = process.cwd();
	const outputPath = path.resolve(cwd, "static", "r");
	const registryJsonPath = path.resolve(cwd, "registry.json");
	fs.writeFileSync(registryJsonPath, JSON.stringify(result, null, "\t"), "utf8");

	log("building registry items...");
	exec(`bun shadcn-svelte registry build ${registryJsonPath} --output ${outputPath} -c ${cwd}`, {
		cwd,
	});
}

function crawlUI(rootPath: string): RegistryItems {
	log("crawling ui...");
	const dir = fs
		.readdirSync(rootPath, { recursive: true, withFileTypes: true })
		.filter((dirent) => dirent.isDirectory());
	return dir.map((dirent) => {
		return buildUIItem(path.resolve(rootPath, dirent.name), dirent.name);
	});
}

function buildUIItem(itemPath: string, itemName: string): RegistryItems[number] {
	const dir = fs.readdirSync(itemPath, { withFileTypes: true });
	const dirFiles = dir.filter((d) => d.isFile());

	const files: RegistryItemFiles = [];
	const registryDeps = new Set<string>();

	dirFiles.map((dirent) => {
		const filepath = path.join(itemPath, dirent.name);
		const relativePath = path.relative(process.cwd(), filepath);
		const source = fs.readFileSync(filepath, { encoding: "utf8" });

		getFileDeps(source).map((dep) => registryDeps.add(dep));
		files.push({
			path: relativePath.replaceAll("\\", "/"),
			type: "registry:file" as const,
		});
	});

	return {
		name: itemName,
		files,
		type: "registry:ui" as const,
		registryDependencies: Array.from(registryDeps),
	} satisfies RegistryItems[number];
}

function crawlHooks(rootPath: string): RegistryItems {
	log("crawling hooks...");
	const dir = fs.readdirSync(rootPath, { withFileTypes: true }).filter((dirent) => dirent.isFile());
	return dir.map((dirent) => {
		const [name] = dirent.name.split(".svelte.ts");
		const filepath = path.join(rootPath, dirent.name);
		const relativePath = path.relative(process.cwd(), filepath);
		const source = fs.readFileSync(filepath, { encoding: "utf8" });

		return {
			name,
			type: "registry:hook" as const,
			files: [{ path: relativePath.replaceAll("\\", "/"), type: "registry:hook" as const }],
			registryDependencies: getFileDeps(source),
		};
	});
}

function getFileDeps(source: string): string[] {
	const registryDeps = new Set<string>();
	const DEPS_RE = /"\$lib\/registry\/(?:ui|hooks)\/([\w-]+)/g;
	for (let m: RegExpExecArray | null; (m = DEPS_RE.exec(source)) !== null;) {
		if (m[1]) registryDeps.add(`local:${m[1]}`);
	}
	return Array.from(registryDeps);
}

if (process.argv.includes("build")) {
	build();
}
