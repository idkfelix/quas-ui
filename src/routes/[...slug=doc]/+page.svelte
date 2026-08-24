<script lang="ts">
	import NavMobile from "$lib/components/nav-mobile.svelte";
	import type { PageProps } from "./$types.js";

	let { data }: PageProps = $props();
	const Markdown = $derived(data.doc);
	const metadata = $derived(data.metadata);
</script>

<svelte:head>
	<title>{metadata.title} - quas ui</title>
	<meta name="description" content={metadata.description} />
</svelte:head>

<header class="mb-6 flex flex-col gap-2">
	<div class="flex w-full items-center">
		<h1 class="mr-auto text-4xl font-bold tracking-tight">
			{metadata.title}
		</h1>
		<NavMobile />
	</div>
	<p class="text-base text-balance text-muted-foreground">
		{metadata.description}
	</p>
</header>
<Markdown />
