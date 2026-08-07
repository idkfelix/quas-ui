<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="flex gap-2">
	<Button size="sm" variant="outline">Small</Button>
	<Button size="icon-sm" aria-label="Submit" variant="outline">
		<ArrowUpRightIcon />
	</Button>
	<Button variant="outline">Default</Button>
	<Button size="icon" aria-label="Submit" variant="outline">
		<ArrowUpRightIcon />
	</Button>
	<Button variant="outline" size="lg">Large</Button>
	<Button size="icon-lg" aria-label="Submit" variant="outline">
		<ArrowUpRightIcon />
	</Button>
</div>
