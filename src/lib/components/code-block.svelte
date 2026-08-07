<script lang="ts">
	import { page } from "$app/state";
	import { CopyButton } from "$lib/registry/ui/copy-button";

  let { 
    name,
    copy = true,
  }: { 
    name: string;
    copy?: boolean;
  } = $props();

	let source = $derived(page.data.exampleSources[name]);
  let raw = $derived(page.data.exampleSourcesRaw[name]);
</script>

<div data-slot="code" class="relative overflow-hidden [&_pre]:max-h-100 [&_pre:not(.shiki)]:p-0">
  {#if copy}
    <CopyButton
      text={raw}
      class="absolute inset-e-2 top-3 text-muted-foreground"
      variant="ghost"
    />
  {/if}
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html source}
</div>