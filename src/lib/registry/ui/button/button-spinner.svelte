<script lang="ts">
	import Loader2Icon from "@lucide/svelte/icons/loader-2";
	import { cn } from "$lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	let {
		class: className,
		name,
		color,
		stroke,
		...restProps
	}: SVGAttributes<SVGSVGElement> = $props();
</script>

<Loader2Icon
	data-button-spinner
	role="status"
	aria-label="Loading"
	class={cn("hidden size-4 animate-spin group-data-[loading=true]/button:inline", className)}
	name={name === null ? undefined : name}
	color={color === null ? undefined : color}
	stroke={stroke === null ? undefined : stroke}
	{...restProps}
/>
