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
<ModeWatcher />
<LightSwitch />
```

## Variants

<Example name="light-switch-variant"/>

## Sizes

<Example name="light-switch-size"/>

## API Reference

<ApiReference schemas={lightSwitch} prefix="LightSwitch"/>
