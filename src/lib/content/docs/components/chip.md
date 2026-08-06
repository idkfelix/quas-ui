---
title: Chip
description: A chip that can act as a toggle or removable tag.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ChipDemo from '$lib/registry/examples/chip-demo.svelte'
  import ChipDemoRaw from '$lib/registry/examples/chip-demo.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ChipDemoRaw}>
  <ChipDemo/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
