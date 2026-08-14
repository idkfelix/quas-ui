---
title: Button
description: A button or anchor that handles promises.
---

<script lang="ts">
  import Example from '$lib/components/example.svelte';
  import PMAdd from '$lib/components/pm-add.svelte';
  import { ApiReference } from '$lib/components/api-reference/index.js';
  import { Reference } from '$lib/references/button.js';
</script>

<Example name="button-demo"/>

## Installation

<PMAdd name="button"/>

## Structure

```svelte
<Button.Root>
	<Button.Spinner />
</Button.Root>
```

## Variants

<Example name="button-variant"/>

## Sizes

<Example name="button-size"/>

## API Reference

<ApiReference {...Reference}/>
