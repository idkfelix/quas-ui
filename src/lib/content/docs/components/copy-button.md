---
title: Copy Button
description: A button used to copy text to the clipboard.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import CopyButtonDemo from '$lib/registry/examples/copy-button-demo.svelte'
  import CopyButtonDemoRaw from '$lib/registry/examples/copy-button-demo.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={CopyButtonDemoRaw}>
  <CopyButtonDemo/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
