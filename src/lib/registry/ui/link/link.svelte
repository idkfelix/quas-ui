<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	let { children, class: className, href, ...rest }: HTMLAnchorAttributes = $props();
	const internal = $derived(href?.startsWith("/") || href?.startsWith("#"));
	const rel = $derived(!internal ? "noopener noreferrer" : undefined);
	const target = $derived(!internal ? "_blank" : undefined);
</script>

<a
	{href}
	{target}
	{rel}
	{...rest}
	class={cn("font-medium text-foreground underline underline-offset-4", className)}
>
	{@render children?.()}
</a>
