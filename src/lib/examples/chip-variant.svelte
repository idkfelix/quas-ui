<script lang="ts">
	import { Chip, type ChipVariant } from "$lib/registry/ui/chip/index.js";
</script>

<div class="flex divide-x-2 divide-border">
	{#each ["default", "outline", "secondary"] as opt (opt)}
		{@const variant = opt as ChipVariant}
		<div class="flex flex-col items-center gap-2 px-2">
			<Chip {variant} class="capitalize">{variant}</Chip>
			<Chip {variant} disabled>Disabled</Chip>
			<Chip {variant} type="toggle" active={true} onclick={null}>Active</Chip>
		</div>
	{/each}
</div>
