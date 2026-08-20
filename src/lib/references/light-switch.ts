import type { LightSwitchProps } from "$lib/registry/ui/light-switch/light-switch.svelte";
import { api } from "./api/index.ts";

export const root = api.defineAPISchema<LightSwitchProps>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "A reference to the button element.",
		}),
		variant: api.defineEnumProp({
			options: ["default", "outline", "secondary", "ghost"],
			description: "The visual style of the button.",
			default: '"default"',
		}),
		size: api.defineEnumProp({
			options: ["icon", "icon-xs", "icon-sm", "icon-lg"],
			description: "The size of the button.",
			default: '"icon"',
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
