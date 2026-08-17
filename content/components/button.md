---
title: Button
description: A button or anchor that handles promises.
---

<script lang="ts">
  import { Example, PMAdd, ApiReference } from '$lib/components/index.js';
  import { button } from '$lib/references/index.js';
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

<ApiReference schemas={button} prefix="Button"/>
