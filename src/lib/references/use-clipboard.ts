import { api } from "$lib/components/api-reference/index.js";
import type { UseClipboard } from "$lib/registry/hooks/use-clipboard.svelte.js";

export const Reference = api.defineHookRef<UseClipboard>("UseClipboard", {
	props: {
		copied: api.defineProp("boolean | undefined", {
			description: "Whether the copy was successful.",
		}),
	},
	methods: {
		copy: {
			type: "(text: string) => Promise<boolean>",
			description: "Copies text to the clipboard",
		},
	},
});
