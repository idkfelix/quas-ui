<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";
	import type { SvelteHTMLElements } from "svelte/elements";

	export const chipVariants = tv({
		base: [
			"group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-2 py-0.5 text-[0.625rem]/none font-medium whitespace-nowrap transition-all",
			"has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 **:data-[icon=inline-end]:order-last **:data-[icon=inline-start]:order-first *:[&>svg]:pointer-events-none *:[&>svg]:size-2.5!",
			"focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-disabled:pointer-events-none aria-disabled:opacity-50",
			"aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
		],
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
				outline: "border-border bg-input/20 text-foreground hover:bg-muted",
				ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
			},
			active: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			{
				variant: "outline",
				active: true,
				class: "bg-primary text-primary-foreground hover:bg-primary/90",
			},
		],
		defaultVariants: {
			variant: "default",
		},
	});

	export type ChipVariant = VariantProps<typeof chipVariants>["variant"];
	export type ChipProps = SvelteHTMLElements["span"] & {
		variant?: ChipVariant;
		active?: boolean;
		disabled?: boolean;
		toggleable?: boolean;
	};
</script>

<script lang="ts">
	// import CheckIcon from "@lucide/svelte/icons/check";
	// import PlusIcon from "@lucide/svelte/icons/plus";
	// import XIcon from "@lucide/svelte/icons/x";
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		variant = "default",
		active = $bindable(false),
		disabled,
		toggleable,
		children,
		...restProps
	}: ChipProps = $props();

	const handleClick = () => {
		if (disabled) return;
		active = !active;
	};
</script>

<span
	data-slot="chip"
	data-active={active}
	class={cn(chipVariants({ variant, active }), className)}
	role={toggleable ? "button" : undefined}
	aria-disabled={disabled}
	aria-pressed={toggleable ? active : undefined}
	onclick={handleClick}
	onkeydown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
	{...restProps}
>
	{@render children?.()}
</span>
