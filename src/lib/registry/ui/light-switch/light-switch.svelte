<script lang="ts" module>
	import type { ButtonSize, ButtonVariant } from "$lib/registry/ui/button/index.js";
	import type { WithoutChildren } from "bits-ui";

	export type LightSwitchProps = WithoutChildren<{
		size?: Extract<ButtonSize, `icon${string}`>;
		variant?: Exclude<ButtonVariant, "destructive" | "link">;
	}>;
</script>

<script lang="ts">
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { toggleMode, mode } from "mode-watcher";
	import { scale } from "svelte/transition";
	import { Button } from "$lib/registry/ui/button/index.js";

	let { size = "icon", variant = "default", ...restProps }: LightSwitchProps = $props();
</script>

<Button data-light-switch {size} {variant} onclick={toggleMode} {...restProps}>
	{#if mode.current === "dark"}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<MoonIcon />
		</div>
	{:else}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<SunIcon />
		</div>
	{/if}
</Button>
