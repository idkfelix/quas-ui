---
title: Mode Toggle
description: An icon button to toggle between light and dark mode using mode-watcher.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ModeToggleExample from '$lib/registry/examples/mode-toggle.svelte'
  import ModeToggleExampleRaw from '$lib/registry/examples/mode-toggle.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ModeToggleExampleRaw}>
  <ModeToggleExample/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
