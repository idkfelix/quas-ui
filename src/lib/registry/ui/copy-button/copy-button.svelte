<script lang="ts" module>
	import type { ButtonProps } from '$lib/registry/ui/button/index.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export type CopyButtonProps = WithElementRef<HTMLButtonAttributes> &
		Pick<ButtonProps, 'size' | 'variant'> & {
			onCopy?: (copied: boolean | undefined) => void;
			text: string;
		};
</script>

<script lang="ts">
	import { CopyIcon, CheckIcon, XIcon } from '@lucide/svelte';
	import { mergeProps } from 'bits-ui';
	import { scale } from 'svelte/transition';
	import { UseClipboard } from '$lib/registry/hooks/use-clipboard.svelte.js';
	import { Button } from '$lib/registry/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		size = 'icon',
		variant = 'outline',
		onCopy,
		text,
		class: className,
		children,
		...restProps
	}: CopyButtonProps = $props();

	// svelte-ignore state_referenced_locally
	if (size === 'icon' && children) {
		size = 'default';
	}

	let clipboard = new UseClipboard();

	const merged = $derived(
		mergeProps(restProps, {
			onclick: async () => {
				const copied = await clipboard.copy(text);
				onCopy?.(copied);
			},
		})
	);
</script>

<Button
	bind:ref
	class={cn('flex items-center gap-2', className)}
	{size}
	{variant}
	{...merged as ButtonProps}
>
	{#if clipboard.copied === true}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CheckIcon tabindex={-1} data-icon="inline-start" />
		</div>
	{:else if clipboard.copied === false}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<XIcon tabindex={-1} data-icon="inline-start" />
		</div>
	{:else}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CopyIcon tabindex={-1} data-icon="inline-start" />
		</div>
	{/if}
	{@render children?.()}
</Button>
