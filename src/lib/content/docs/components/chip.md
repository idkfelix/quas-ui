---
title: Chip
description: A chip that can act as a toggle or removable tag.
---

<script lang='ts'>
  import { page } from '$app/state';
  import ComponentPreview from '$lib/components/component-preview.svelte'
  import CodeBlock from '$lib/components/code-block.svelte'

  let rUrl = $derived(page.url.toString().replace('/docs/components/','/r/').concat('.','json'))
</script>



## Installation
<CodeBlock lang='bash' code={`npx shadcn-svelte@latest add ${rUrl}`}/>