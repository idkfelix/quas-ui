<script lang="ts" module>
	import type { ButtonSize, ButtonVariant } from "$lib/registry/ui/button/index.js";
	import type { Component } from "svelte";

	export type LightSwitchProps = {
		lightIcon?: Component;
		darkIcon?: Component;
		size?: Exclude<ButtonSize, `icon${string}`>;
		variant?: Exclude<ButtonVariant, "destructive" | "link">;
	};

	const sizeMap = {
		default: "icon",
		xs: "icon-xs",
		sm: "icon-sm",
		lg: "icon-lg",
	} as Record<string, ButtonSize>;
</script>

<script lang="ts">
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/registry/ui/button/index.js";

	let {
		lightIcon: LightIcon = SunIcon,
		darkIcon: DarkIcon = MoonIcon,
		size = "default",
		variant = "default",
	}: LightSwitchProps = $props();
</script>

<Button
	data-light-switch
	aria-label="Toggle theme"
	onclick={toggleMode}
	size={sizeMap[size]}
	{variant}
>
	<LightIcon class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
	<DarkIcon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
</Button>
