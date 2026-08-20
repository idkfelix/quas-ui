<script lang="ts" module>
	import type { ButtonSize, ButtonVariant } from "$lib/registry/ui/button/index.js";
	import type { WithElementRef } from "bits-ui";
	import type { HTMLButtonAttributes } from "svelte/elements";

	export type CopyButtonProps = WithElementRef<HTMLButtonAttributes> & {
		variant?: Exclude<ButtonVariant, "destructive" | "link">;
		size?: ButtonSize;
		text: string;
	};
</script>

<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import XIcon from "@lucide/svelte/icons/x";
	import { mergeProps } from "bits-ui";
	import { scale } from "svelte/transition";
	import { UseClipboard } from "$lib/registry/hooks/use-clipboard.svelte";
	import { buttonVariants } from "$lib/registry/ui/button/index.js";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "default",
		size = "icon",
		text,
		children,
		...restProps
	}: CopyButtonProps = $props();

	const clipboard = new UseClipboard();
</script>

<button
	bind:this={ref}
	data-copy-button
	data-slot="button"
	class={cn(buttonVariants({ variant, size }), className)}
	{...mergeProps(restProps, {
		onclick: () => clipboard.copy(text),
	})}
>
	{#if clipboard.copied === true}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CheckIcon tabindex={-1} />
			<span class="sr-only">Copied</span>
		</div>
	{:else if clipboard.copied === false}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<XIcon tabindex={-1} />
			<span class="sr-only">Failed to copy</span>
		</div>
	{:else}
		<div in:scale={{ duration: 500, start: 0.85 }}>
			<CopyIcon tabindex={-1} />
			<span class="sr-only">Copy</span>
		</div>
	{/if}
	{@render children?.()}
</button>
