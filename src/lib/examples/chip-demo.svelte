<script lang="ts">
	import { Chip } from "$lib/registry/ui/chip/index.js";
</script>

<div class="flex gap-2">
	<Chip>Static</Chip>
	<Chip variant="outline" type="toggle">Toggle</Chip>
	<Chip variant="secondary" type="removable">Tag</Chip>
</div>
