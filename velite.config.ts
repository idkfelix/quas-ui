import { defineConfig, s } from "velite";

export default defineConfig({
	collections: {
		docs: {
			name: "Doc",
			pattern: "./**/*.md",
			schema: s
				.object({
					title: s.string(),
					description: s.string(),
					path: s.path(),
					content: s.markdown(),
				})
				.transform((d) => ({
					...d,
					group: d.path.split("/").shift(),
				})),
		},
	},
});
