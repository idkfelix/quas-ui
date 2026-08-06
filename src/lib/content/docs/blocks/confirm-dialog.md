---
title: Confirm Dialog
description: A confirmation dialog with a callback.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ConfirmDialogDemo from '$lib/registry/examples/confirm-dialog-demo.svelte'
  import ConfirmDialogDemoRaw from '$lib/registry/examples/confirm-dialog-demo.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/blocks/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ConfirmDialogDemoRaw}>
  <ConfirmDialogDemo/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
