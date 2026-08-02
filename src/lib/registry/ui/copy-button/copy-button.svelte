<script lang="ts" module>
	import type { ButtonProps } from '$lib/components/ui/button/index.js';
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
	import { Button } from '$lib/components/ui/button/index.js';
	import { UseClipboard } from '$lib/hooks/use-clipboard.svelte';
	import { cn } from '$lib/utils.js';

	let {
		ref = $bindable(null),
		size = 'icon',
		variant = 'outline',
		onCopy,
		text,
		class: className,
		children,
		...rest
	}: CopyButtonProps = $props();

	// svelte-ignore state_referenced_locally
	if (size === 'icon' && children) {
		size = 'default';
	}

	let clipboard = new UseClipboard();

	const merged = $derived(
		mergeProps(rest, {
			onclick: async () => {
				const copied = await clipboard.copy(text);
				onCopy?.(copied);
			},
		})
	);
</script>

<Button
	bind:ref
	{size}
	{variant}
	class={cn('flex items-center gap-2', className)}
	{...merged as ButtonProps}
>
	{#if clipboard.copied === true}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CheckIcon tabindex={-1} />
		</div>
	{:else if clipboard.copied === false}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<XIcon tabindex={-1} />
		</div>
	{:else}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CopyIcon tabindex={-1} />
		</div>
	{/if}
	{@render children?.()}
</Button>
