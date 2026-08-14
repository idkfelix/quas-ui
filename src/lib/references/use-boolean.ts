import { api } from "$lib/components/api-reference/index.js";
import type { UseBoolean } from "$lib/registry/hooks/use-boolean.svelte.js";

export const Reference = api.defineHookRef<UseBoolean>("UseBoolean", {
	props: {
		current: api.defineProp("boolean", {
			description: "The current boolean value",
		}),
	},
	methods: {
		setTrue: {
			type: "() => void",
			description: "Set the current value to true",
		},
		setFalse: {
			type: "() => void",
			description: "Set the current value to false",
		},
		toggle: {
			type: "() => void",
			description: "Toggle the current value",
		},
	},
});
