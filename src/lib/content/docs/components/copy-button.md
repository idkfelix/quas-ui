---
title: Copy Button
description: A button used to copy text to the clipboard.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>



## Installation
<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>