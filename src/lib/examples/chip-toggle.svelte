<script lang="ts">
	import { Chip } from "$lib/registry/ui/chip/index.js";
	let chipActive = $state(false);
</script>

<Chip bind:active={chipActive} variant="outline" type="toggle"
	>{chipActive ? "Active" : "Inactive"}</Chip
>
