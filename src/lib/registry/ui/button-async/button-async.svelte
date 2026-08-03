<script lang="ts" module>
	import type { ButtonProps } from '$lib/registry/ui/button';

	export type ButtonAsyncProps = ButtonProps & {
		loading?: boolean;
		onClickPromise?: (e: MouseEvent) => Promise<void>;
	};
</script>

<script lang="ts">
	import { Button } from '$lib/registry/ui/button';
	import { Spinner } from '$lib/registry/ui/spinner';
	import { cn } from '$lib/utils';
	import { UseBoolean } from '$lib/registry/hooks/use-boolean.svelte';

	let {
		ref = $bindable(null),
		class: className,
		loading: loadingProp = false,
		disabled: disabledProp,
		onClickPromise,
		onclick,
		children,
		...restProps
	}: ButtonAsyncProps = $props();

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
