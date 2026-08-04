<script lang="ts">
  import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1 class="scroll-m-20 text-4xl font-bold tracking-tight pb-2">
  {data.meta.title}
</h1>
<p class="text-base text-balance text-muted-foreground sm:text-base">
  {data.meta.description}
</p>

<div class='mt-8 prose-docs'>
  <data.content/>
</div>