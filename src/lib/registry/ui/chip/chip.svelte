<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	export const chipVariants = tv({
		base: [
			'group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem] font-medium whitespace-nowrap transition-all',
			'has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_[data-icon=inline-end]]:order-last [&_[data-icon=inline-start]]:order-first *:[&>svg]:pointer-events-none *:[&>svg]:size-2.5!',
			'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
			'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
		],
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				outline: 'border-border bg-input/20 text-foreground hover:bg-muted',
				ghost: 'hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50',
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
		removable,
		toggleable,
		disabled,
		onclick,
		onremove,
		children,
		...restProps
	}: ChipProps = $props();

	const handleToggle = (e: MouseEvent) => {
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
	data-slot="chip"
	tabindex={toggleable ? 0 : -1}
	aria-pressed={toggleable ? active : undefined}
	onclick={toggleable ? handleToggle : onclick}
	{disabled}
	{...restProps}
>
	<span class="leading-2">
		{@render children?.()}
	</span>

	{#if toggleable}
		{#if active}
			<span in:scale={{ duration: 500, start: 0.85 }} data-icon="inline-start">
				<CheckIcon />
			</span>
		{:else}
			<span in:scale={{ duration: 500, start: 0.85 }} data-icon="inline-start">
				<PlusIcon />
			</span>
		{/if}
	{/if}

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
