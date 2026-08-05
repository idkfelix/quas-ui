<script lang="ts">
  import SEO from '$lib/components/seo.svelte';
  import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<SEO {...data.meta}/>

<div>
  <h1 class="text-4xl font-bold tracking-tight pb-2">
    {data.meta.title}
  </h1>
  <p class="text-base text-balance text-muted-foreground sm:text-base">
    {data.meta.description}
  </p>
</div>

<div class='mt-6 prose-docs'>
  <data.content/>
</div>