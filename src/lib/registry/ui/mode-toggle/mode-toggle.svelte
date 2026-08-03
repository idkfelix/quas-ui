<script lang="ts" module>
	import type { ButtonProps } from '$lib/registry/ui/button';
	import type { WithoutChildren } from 'bits-ui';

	export type ModeToggleProps = WithoutChildren<
		Omit<ButtonProps, 'variant' | 'size'> & {
			size?: 'icon' | 'icon-xs' | 'icon-sm' | 'icon-lg';
			variant?: 'outline' | 'ghost';
		}
	>;
</script>

<script lang="ts">
	import { SunIcon, MoonIcon } from '@lucide/svelte';
	import { toggleMode, mode } from 'mode-watcher';
	import { scale } from 'svelte/transition';
	import { Button } from '$lib/registry/ui/button';

	let {
		ref = $bindable(null),
		size = 'icon',
		variant = 'outline',
		...restProps
	}: ModeToggleProps = $props();
</script>

<Button bind:ref {size} {variant} onclick={toggleMode} {...restProps}>
	{#if mode.current === 'dark'}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<MoonIcon />
		</div>
	{:else}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<SunIcon />
		</div>
	{/if}
</Button>
