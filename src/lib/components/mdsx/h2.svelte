<script lang="ts">
	import { cn } from "$lib/utils.js";
	import Heading from "./heading.svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		class: className,
		children,
		id,
		...restProps
	}: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h2
	class={cn(
		"[&+]*:[code]:text-xl mt-10 scroll-m-28 font-heading text-xl font-medium tracking-tight first:mt-0 lg:mt-12 [&+.steps]:mt-0! [&+.steps>h3]:mt-4! [&+h3]:mt-6! [&+p]:mt-4!",
		className
	)}
	{id}
	{...restProps}
>
	<Heading id={id ?? undefined}>
		{@render children?.()}
	</Heading>
</h2>
