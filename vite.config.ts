import tailwindcss from "@tailwindcss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import pkg from "./package.json" with { type: "json" };

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	assetsInclude: ["**/*.md"],
	server: { forwardConsole: true },
	ssr: { noExternal: Object.keys(pkg.devDependencies) },
});
