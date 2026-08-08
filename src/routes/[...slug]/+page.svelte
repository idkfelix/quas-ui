<script lang="ts">
	import type { PageProps } from "./$types.js";

	let { data }: PageProps = $props();
	const Markdown = $derived(data.component);
</script>

<svelte:head>
	<title>{data.metadata.title} - Quas UI</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

<div class="mb-6" data-toc-ignore>
	<p class="pb-2 text-4xl font-bold tracking-tight">
		{data.metadata.title}
	</p>
	<p class="text-base text-balance text-muted-foreground sm:text-base">
		{data.metadata.description}
	</p>
</div>

<main>
	<Markdown />
</main>
