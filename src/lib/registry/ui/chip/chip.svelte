<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export const chipVariants = tv({
		base: [
			'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all',
			'has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 *:[&>svg]:pointer-events-none *:[&>svg]:size-2.5!',
			'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
			'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
		],
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				outline: 'border-border bg-input/20 text-foreground hover:bg-muted',
			},
			active: {
				true: '',
				false: '',
			},
		},
		compoundVariants: [
			{
				variant: 'outline',
				active: true,
				class: 'bg-primary text-primary-foreground hover:bg-primary/90',
			},
		],
		defaultVariants: {
			variant: 'default',
		},
	});

	export type ChipVariant = VariantProps<typeof chipVariants>['variant'];

	export type ChipProps = HTMLButtonAttributes & {
		variant?: ChipVariant;
		active?: boolean;
		removable?: boolean;
		toggleable?: boolean;
		onclick?: (e: MouseEvent) => void;
		onremove?: (e: MouseEvent) => void;
	};
</script>

<script lang="ts">
	import { XIcon, PlusIcon, CheckIcon } from '@lucide/svelte';
	import { scale } from 'svelte/transition';
	import { cn } from '$lib/utils';

	let {
		class: className,
		variant = 'default',
		active = $bindable(false),
		removable = false,
		toggleable = false,
		disabled = false,
		onclick,
		onremove,
		children,
		...restProps
	}: ChipProps = $props();

	const handleClick = (e: MouseEvent) => {
		if (disabled) return;
		if (onclick) onclick(e);
		else active = !active;
	};

	const handleRemove = (e: MouseEvent) => {
		e.stopPropagation();
		if (disabled) return;
		onremove?.(e);
	};
</script>

<svelte:element
	this={removable ? 'span' : 'button'}
	class={cn(chipVariants({ variant, active }), className)}
	onclick={toggleable && !removable ? handleClick : undefined}
	tabindex={toggleable && !removable ? 0 : -1}
	aria-pressed={toggleable && !removable ? active : undefined}
	{disabled}
	{...restProps}
>
	{#if toggleable}
		{#if active}
			<div in:scale={{ duration: 500, start: 0.85 }}>
				<CheckIcon data-icon="inline-start" />
			</div>
		{:else}
			<div in:scale={{ duration: 500, start: 0.85 }}>
				<PlusIcon data-icon="inline-start" />
			</div>
		{/if}
	{/if}

	{@render children?.()}

	{#if removable}
		<button
			type="button"
			class="rounded-full hover:bg-primary/20"
			onclick={handleRemove}
			aria-label="Remove"
		>
			<XIcon data-icon="inline-end" />
		</button>
	{/if}
</svelte:element>
