---
title: Button
description: A button that handles promises with a loading state.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ButtonDemo from '$lib/registry/examples/button-demo.svelte'
  import ButtonDemoRaw from '$lib/registry/examples/button-demo.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ButtonDemoRaw}>
  <ButtonDemo/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
