<script lang="ts">
	import { Chip } from "$lib/registry/ui/chip/index.js";
</script>

<div class="flex gap-2">
	<Chip>Tag</Chip>
	<Chip variant="outline" toggleable>Tag</Chip>
	<Chip variant="outline" disabled toggleable>Tag</Chip>
</div>
