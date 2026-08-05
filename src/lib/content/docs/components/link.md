---
title: Link
description: A simple link component.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'
  import LinkExample from '$lib/registry/examples/link.svelte'
  import LinkExampleRaw from '$lib/registry/examples/link.svelte?raw'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>

<ComponentPreview example={LinkExampleRaw}>
  <LinkExample/>
</ComponentPreview>

## Installation

<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>
