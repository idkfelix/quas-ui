<script lang="ts" module>
	import type { ButtonSize, ButtonVariant } from "$lib/registry/ui/button/index.js";
	import type { WithElementRef } from "$lib/utils.js";

	export type LightSwitchProps = WithElementRef<{
		variant?: Exclude<ButtonVariant, "destructive" | "link">;
		size?: Extract<ButtonSize, `icon${string}`>;
	}>;
</script>

<script lang="ts">
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { toggleMode } from "mode-watcher";
	import { Button } from "$lib/registry/ui/button/index.js";

	let { ref = $bindable(null), variant = "default", size = "icon" }: LightSwitchProps = $props();
</script>

<Button bind:ref data-light-switch aria-label="Toggle theme" onclick={toggleMode} {variant} {size}>
	<SunIcon class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
	<MoonIcon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
</Button>
