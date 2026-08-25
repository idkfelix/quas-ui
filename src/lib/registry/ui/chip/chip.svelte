<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";
	import type { WithElementRef } from "$lib/utils.js";
	import type { SvelteHTMLElements } from "svelte/elements";

	export const chipVariants = tv({
		base: "group/chip inline-flex h-5 w-fit shrink-0 items-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem]/none font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-disabled:pointer-events-none aria-disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-2.5",
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground hover:bg-primary/90 aria-pressed:border-border aria-pressed:bg-input/20 aria-pressed:text-foreground aria-pressed:hover:bg-muted",
				outline:
					"border-border bg-input/20 text-foreground hover:bg-muted aria-pressed:bg-primary aria-pressed:text-primary-foreground aria-pressed:hover:bg-primary/90",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-pressed:border-border aria-pressed:bg-input/20 aria-pressed:text-foreground aria-pressed:hover:bg-muted",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	});

	export type ChipType = "action" | "toggle" | "removable";
	export type ChipVariant = VariantProps<typeof chipVariants>["variant"];

	export type ChipProps = WithElementRef<SvelteHTMLElements["span"]> &
		WithElementRef<Omit<SvelteHTMLElements["button"], "type">> & {
			type?: ChipType;
			variant?: ChipVariant;
			active?: boolean;
			onRemove?: () => void;
		};
</script>

<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import PlusIcon from "@lucide/svelte/icons/plus";
	import XIcon from "@lucide/svelte/icons/x";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		type = "action",
		variant = "default",
		active = $bindable(false),
		onRemove,
		children,
		...restProps
	}: ChipProps = $props();
</script>

{#if type === "removable"}
	<span
		bind:this={ref}
		data-slot="chip"
		aria-disabled={restProps.disabled}
		class={cn(chipVariants({ variant }), className)}
		{...restProps}
	>
		{@render children?.()}
		<button
			aria-label="Remove"
			class="rounded-full transition-all hover:bg-primary/20"
			onclick={onRemove}
		>
			<XIcon data-icon="inline-end" />
		</button>
	</span>
{:else}
	<button
		bind:this={ref}
		data-slot="chip"
		aria-pressed={type === "toggle" ? active : undefined}
		class={cn(chipVariants({ variant }), className)}
		onclick={type === "toggle" ? () => (active = !active) : undefined}
		{...restProps}
	>
		{#if type === "toggle"}
			<PlusIcon
				data-icon="inline-start"
				class="scale-100 rotate-0 transition-all group-aria-pressed/chip:scale-0 group-aria-pressed/chip:-rotate-90"
			/>
			<CheckIcon
				data-icon="inline-start"
				class="absolute scale-0 rotate-90 transition-all group-aria-pressed/chip:scale-100 group-aria-pressed/chip:rotate-0"
			/>
		{/if}
		{@render children?.()}
	</button>
{/if}
