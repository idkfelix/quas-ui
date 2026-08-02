<script lang="ts" module>
	import type { ButtonProps } from '$lib/registry/ui/button/index.js';
	import type { MouseEventHandler } from 'svelte/elements';

	export type AsyncButtonProps = ButtonProps & {
		loading?: boolean;
		onClickPromise?: (
			e:
				| Parameters<MouseEventHandler<HTMLButtonElement>>[0]
				| Parameters<MouseEventHandler<HTMLAnchorElement>>[0]
		) => Promise<void>;
	};
</script>

<script lang="ts">
	import { UseBoolean } from '$lib/registry/hooks/use-boolean.svelte';
	import { Button } from '$lib/registry/ui/button/index.js';
	import { Spinner } from '$lib/registry/ui/spinner/index.js';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		class: className,
		loading: loadingProp = false,
		disabled: disabledProp,
		onClickPromise,
		onclick,
		children,
		...restProps
	}: AsyncButtonProps = $props();

	let pending = new UseBoolean(false);
	let loading = $derived(loadingProp || pending.current);
</script>

<Button
	bind:ref
	class={cn(loading && '[&_svg:not([data-loading-icon])]:hidden', className)}
	disabled={loading || disabledProp}
	onclick={async (e) => {
		onclick?.(e as never);
		if (onClickPromise) {
			pending.setTrue();
			try {
				await onClickPromise(e);
			} finally {
				pending.setFalse();
			}
		}
	}}
	{...restProps}
>
	{#if loading}
		<Spinner data-icon="inline-start" data-loading-icon />
	{/if}
	{@render children?.()}
</Button>
