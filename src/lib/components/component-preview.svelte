<script lang='ts'>
  import CodePreview from "./code-preview.svelte";
  import type { Snippet } from "svelte";

  let {example, children}: {example: string, children?: Snippet} = $props()
</script>

<div class='no-prose-docs group relative mt-4 mb-12 flex flex-col rounded-lg border overflow-hidden'>
  <div>
    <div data-slot="preview" class="preview flex justify-center">
      <div class="preview flex min-h-112.5 w-full justify-center border-b p-10 items-center">
        {@render children?.()}
      </div>
    </div>
    <CodePreview code={example} class='rounded-none'/>
  </div>
</div>