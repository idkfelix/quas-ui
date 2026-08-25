<script lang="ts">
	import { Chip } from "$lib/registry/ui/chip/index.js";

	let active = $state(false);
	let text = $derived(active ? "Active" : "Inactive");
</script>

<Chip bind:active variant="outline" type="toggle">{text}</Chip>
