---
title: Button
description: A button or anchor that handles promises.
---

<script lang="ts">
  import Example from '$lib/components/example.svelte';
  import PMAdd from '$lib/components/pm-add.svelte';
  import APITable from "$lib/components/api-table.svelte";
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

<APITable name="Button.Root" description="The main button component." props={{
  ref: {
    type: "HTMLElement",
    tooltip: ["HTMLButtonElement", "HTMLAnchorElement"],
    bindable: true,
  },
  children: {
    type: "Snippet",
  },
  variant: {
    type: "Enum",
    tooltip: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    defaultVal: "default",
  },
  size: {
    type: "Enum",
    tooltip: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    defaultVal: "default",
  },
  loading: {
    type: "boolean",
    bindable: true,
    defaultVal: "false",
  },
  onClickPromise: {
    type: "function",
    tooltip: "(e?: MouseEvent) => Promise<void>",
  }
}}/>
