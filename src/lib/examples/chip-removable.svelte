<script lang="ts">
	import { Chip } from "$lib/registry/ui/chip/index.js";
	let tags = $state(["Tag A", "Tag B", "Tag C"]);
</script>

<div class="flex gap-2">
	{#each tags as tag, index (tag)}
		<Chip variant="secondary" type="removable" onRemove={() => (tags = tags.toSpliced(index, 1))}
			>{tag}</Chip
		>
	{/each}
</div>
