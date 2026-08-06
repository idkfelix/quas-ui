<script lang="ts">
	import SEO from '$lib/components/seo.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<SEO {...data.metadata} />

<div>
	<h1 class="pb-2 text-4xl font-bold tracking-tight">
		{data.metadata.title}
	</h1>
	<p class="text-base text-balance text-muted-foreground sm:text-base">
		{data.metadata.description}
	</p>
</div>

<div class="prose-docs mt-6">
	<data.component />
</div>
