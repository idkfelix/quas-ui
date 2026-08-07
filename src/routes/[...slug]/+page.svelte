<script lang="ts">
	import SEO from "$lib/components/seo.svelte";
	import type { PageProps } from "./$types";

	let { data }: PageProps = $props();
	const Markdown = $derived(data.component);
</script>

<SEO {...data.metadata} />

<div class="mb-6">
	<h1 class="pb-2 text-4xl font-bold tracking-tight">
		{data.metadata.title}
	</h1>
	<p class="text-base text-balance text-muted-foreground sm:text-base">
		{data.metadata.description}
	</p>
</div>

<main>
	<Markdown />
</main>
