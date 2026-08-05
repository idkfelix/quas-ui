---
title: Chip
description: A chip that can act as a toggle or removable tag.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ChipExample from '$lib/registry/examples/chip.svelte'
  import ChipExampleRaw from '$lib/registry/examples/chip.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ChipExampleRaw}>
  <ChipExample/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
