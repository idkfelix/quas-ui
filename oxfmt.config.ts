import { defineConfig } from "oxfmt";

export default defineConfig({
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	trailingComma: "es5",
	sortImports: {
		internalPattern: ["$lib/"],
		newlinesBetween: false,
		order: "asc",
		customGroups: [
			{
				groupName: "sveltekit-env",
				elementNamePattern: ["$env/**/*"],
			},
			{
				groupName: "sveltekit-app",
				elementNamePattern: ["$app/**/*"],
			},
			{
				groupName: "wildcard-$lib-code",
				elementNamePattern: ["$lib/**/*.svelte", "$lib/**/*.js"],
				modifiers: ["wildcard"],
			},
			{
				groupName: "named-$lib-code",
				elementNamePattern: ["$lib/**/*.svelte", "$lib/**/*.js"],
				modifiers: ["named"],
			},
			{
				groupName: "$lib-code",
				elementNamePattern: ["$lib/**/*.svelte", "$lib/**/*.js"],
			},
		],
		groups: [
			// SvelteKit-specific virtual modules
			"sveltekit-env",
			"sveltekit-app",
			// Node.js modules
			"wildcard-builtin",
			"builtin",
			"named-builtin",
			// Third-party modules
			"wildcard-external",
			"external",
			"named-external",
			// Modules from this project
			"wildcard-internal",
			"internal",
			"named-internal",
			// Library code
			"wildcard-$lib-code",
			"$lib-code",
			"named-$lib-code",
			// Relative imports
			"wildcard-index",
			"index",
			"named-index",
			"wildcard-sibling",
			"sibling",
			"named-sibling",
			"wildcard-parent",
			"parent",
			"named-parent",
			// All types
			"type",
			// Miscellaneous
			"unknown",
		],
	},
	sortTailwindcss: {
		stylesheet: "./src/app.css",
		functions: ["cn", "clsx", "tv"],
	},
	sortPackageJson: false,
	svelte: true,
	ignorePatterns: ["bun.lock", "/static/"],
	overrides: [
		{
			files: ["package.json"],
			options: {
				useTabs: false,
			},
		},
	],
});
