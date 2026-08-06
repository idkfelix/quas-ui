---
title: Mode Toggle
description: An icon button to toggle between light and dark mode using mode-watcher.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ModeToggleDemo from '$lib/registry/examples/mode-toggle-demo.svelte'
  import ModeToggleDemoRaw from '$lib/registry/examples/mode-toggle-demo.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ModeToggleDemoRaw}>
  <ModeToggleDemo/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
