/** @type {import("prettier").Config} */
const config = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	bracketSpacing: false,
	arrowParens: 'avoid',
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.svelte',
			options: {parser: 'svelte'},
		},
	],
	tailwindStylesheet: './src/app.css',
};

export default config;
