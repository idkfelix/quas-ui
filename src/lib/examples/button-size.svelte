<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<div class="grid grid-cols-2 gap-2 sm:flex">
	<Button size="xs" variant="outline">XS</Button>
	<Button size="icon-xs" variant="outline">
		<ArrowUpRightIcon />
	</Button>
	<Button size="sm" variant="outline">Small</Button>
	<Button size="icon-sm" variant="outline">
		<ArrowUpRightIcon />
	</Button>
	<Button variant="outline">Default</Button>
	<Button size="icon" variant="outline">
		<ArrowUpRightIcon />
	</Button>
	<Button variant="outline" size="lg">Large</Button>
	<Button size="icon-lg" variant="outline">
		<ArrowUpRightIcon />
	</Button>
</div>
