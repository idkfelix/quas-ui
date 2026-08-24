import type { LightSwitchProps } from "$lib/registry/ui/light-switch/light-switch.svelte";
import { api } from "./api/index.ts";
import type { HTMLButtonAttributes } from "svelte/elements";

export const root = api.defineAPISchema<Omit<LightSwitchProps, keyof HTMLButtonAttributes>>({
	title: "Root",
	props: {
		ref: api.defineSimpleProp({
			type: "HTMLElement",
			bindable: true,
			description: "The underlying DOM element being rendered.",
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
			name: "data-slot",
			value: '"button"',
			description: "Present on the root element.",
		}),
	],
});

export const lightSwitch = [root];
