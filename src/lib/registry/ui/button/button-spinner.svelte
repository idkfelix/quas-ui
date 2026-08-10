<script lang="ts">
	import { Spinner } from "$lib/registry/ui/spinner/index.js";
	import { cn } from "$lib/utils.js";
	import type { SVGAttributes } from "svelte/elements";

	let { class: className, ...restProps }: SVGAttributes<SVGSVGElement> = $props();
</script>

<Spinner
	data-loading-icon
	data-slot="button-spinner"
	class={cn("hidden group-data-[loading=true]/button:inline", className)}
	{...restProps}
/>
