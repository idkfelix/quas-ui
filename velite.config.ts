import { defineConfig, s } from "velite";

const schema = s
	.object({
		title: s.string(),
		description: s.string(),
		path: s.path(),
		content: s.markdown(),
	})
	.transform((data) => {
		const parts = data.path.split("/");
		return {
			...data,
			folder: parts.length > 1 ? parts[0] : "root",
		};
	});

export default defineConfig({
	collections: {
		docs: {
			name: "Doc",
			pattern: "./**/*.md",
			schema: schema,
		},
	},
});
