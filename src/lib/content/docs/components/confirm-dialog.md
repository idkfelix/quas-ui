---
title: Confirm Dialog
description: A confirmation dialog with a callback.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import Example from '$lib/registry/examples/confirm-dialog.svelte'
  import raw from '$lib/registry/examples/confirm-dialog.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={raw}>
  <Example/>
</ComponentPreview>

## Installation
<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>