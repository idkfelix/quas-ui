---
title: Button
description: A button that handles promises with a loading state.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import ButtonExample from '$lib/registry/examples/button.svelte'
  import ButtonExampleRaw from '$lib/registry/examples/button.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={ButtonExampleRaw}>
  <ButtonExample/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
