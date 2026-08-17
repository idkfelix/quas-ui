<script lang="ts">
	import { page } from "$app/state";
</script>

<svelte:head>
	<title>{page.status} - quas ui</title>
	<meta name="description" content={page.error?.message} />
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="mt-24 text-4xl font-semibold">{page.status}</h1>
	<p class="text-muted-foreground">{page.error?.message}</p>
</div>
