<script lang="ts" context="module">
	export { default as p } from "./p.svelte";
	export { default as h1 } from "./h1.svelte";
	export { default as h2 } from "./h2.svelte";
	export { default as h3 } from "./h3.svelte";
	export { default as li } from "./li.svelte";
	export { default as ul } from "./ul.svelte";
	export { default as hr } from "./hr.svelte";
	export { default as strong } from "./strong.svelte";
	export { Root as a } from "$lib/registry/ui/link/index.js";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	let {
		children,
		metadata,
	}: {
		children: Snippet;
		metadata: {
			title: string;
			description: string;
		};
	} = $props();
</script>

<svelte:head>
	<title>{metadata.title} - quas ui</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<figure>
	<header class="mb-6">
		<p class="pb-2 text-4xl font-bold tracking-tight">
			{metadata.title}
		</p>
		<p class="text-base text-balance text-muted-foreground sm:text-base">
			{metadata.description}
		</p>
	</header>
	{@render children()}
</figure>
