import type { LightSwitchProps } from "$lib/registry/ui/light-switch/light-switch.svelte";
import { api } from "./api/index.ts";

export const root = api.defineAPISchema<LightSwitchProps>({
	title: "Root",
	props: {
		lightIcon: api.defineSimpleProp({
			type: "Component",
			description: "Light mode icon override.",
		}),
		darkIcon: api.defineSimpleProp({
			type: "Component",
			description: "Dark mode icon override.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary", "ghost"],
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: api.defineEnumProp({
			options: ["default", "xs", "sm", "lg"],
			description: "The size of the button.",
			default: '"default"',
		}),
	},
	dataAttrs: [
		api.defineSimpleDataAttr({
			name: "data-light-switch",
			description: "Present on the root light switch element.",
		}),
	],
});

export const lightSwitch = [root];
