<script lang="ts" context="module">
	export { default as p } from "./p.svelte";
	export { default as h1 } from "./h1.svelte";
	export { default as h2 } from "./h2.svelte";
	export { default as h3 } from "./h3.svelte";
	export { default as li } from "./li.svelte";
	export { default as ul } from "./ul.svelte";
	export { default as hr } from "./hr.svelte";
	export { default as a } from "./a.svelte";
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

<figure class="w-full">
	<header class="mb-6 flex flex-col gap-2">
		<h1 class="text-4xl font-bold tracking-tight">
			{metadata.title}
		</h1>
		<p class="text-base text-balance text-muted-foreground">
			{metadata.description}
		</p>
	</header>
	{@render children()}
</figure>
