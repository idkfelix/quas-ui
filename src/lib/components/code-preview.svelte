<script lang='ts'>
  import { CopyButton } from "$lib/registry/ui/copy-button";
  import { highlightCode } from "$lib/highlighter";
  import { cn } from "$lib/utils";

  let {code, class: className}: {
    code: string;
    class?: string;
  } = $props();

  let cleanCode = $derived(code.replaceAll('$lib/registry/ui', '$lib/components/ui').replace(/\t/g, "  "));
  let html = $derived(await highlightCode(cleanCode));
</script>

<div 
  data-slot="code" 
  class={cn('relative overflow-hidden [&_pre]:max-h-100 rounded-lg', className)}
>
  <CopyButton variant='ghost' class='absolute inset-e-2 top-3 text-muted-foreground' text={cleanCode}/>
  <figure data-rehype-pretty-code-figure>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html html}
  </figure>
</div>