<script lang="ts" module>
	import type { ButtonSize, ButtonVariant } from "$lib/registry/ui/button/index.js";
	import type { WithElementRef, WithoutChildren } from "$lib/utils.js";
	import type { HTMLButtonAttributes } from "svelte/elements";

	export type LightSwitchProps = WithElementRef<WithoutChildren<HTMLButtonAttributes>> & {
		variant?: Exclude<ButtonVariant, "destructive" | "link">;
		size?: Extract<ButtonSize, `icon${string}`>;
	};
</script>

<script lang="ts">
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { mergeProps } from "bits-ui";
	import { toggleMode } from "mode-watcher";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "icon",
		...restProps
	}: LightSwitchProps = $props();
</script>

<button
	bind:this={ref}
	data-light-switch
	data-slot="button"
	aria-label="Toggle theme"
	class={cn(buttonVariants({ variant, size }), className)}
	{...mergeProps(restProps, {
		onclick: toggleMode,
	})}
>
	<SunIcon class="scale-100 rotate-0 transition-all! dark:scale-0 dark:-rotate-90" />
	<MoonIcon class="absolute scale-0 rotate-90 transition-all! dark:scale-100 dark:rotate-0" />
</button>
