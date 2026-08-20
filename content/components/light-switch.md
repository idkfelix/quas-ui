---
title: Light Switch
description: A toggle button for mode-watcher.
---

<script lang="ts">
  import { Example, AddRegistry, ApiReference } from '$lib/components/index.js';
  import { lightSwitch } from '$lib/references/index.js';
</script>

<Example name="light-switch-demo"/>

## Installation

<AddRegistry name="light-switch"/>

## Usage

Install and include the `<ModeWatcher/>` component from [svecosystem/mode-watcher](https://github.com/svecosystem/mode-watcher) in your root layout to enable mode toggling.

```svelte
<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import { LightSwitch } from "$lib/components/ui/light-switch/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />
<LightSwitch />

{@render children()}
```

## Variants & Sizes

Refer to [Button Variants](/components/button#variants) and [Button Sizes](/components/button#sizes) for examples of available styles.

## API Reference

<ApiReference schemas={lightSwitch} prefix="LightSwitch"/>
