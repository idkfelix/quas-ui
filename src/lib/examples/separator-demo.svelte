<script lang="ts">
	import { Separator } from "$lib/registry/ui/separator/index.js";
</script>

<div>
	<div class="space-y-1">
		<h4 class="text-sm leading-none font-medium">Heading Text</h4>
	</div>
	<Separator class="my-4" />
	<div class="flex h-5 items-center space-x-4 text-sm">
		<div>Item</div>
		<Separator orientation="vertical" />
		<div>Item</div>
		<Separator orientation="vertical" />
		<div>Item</div>
	</div>
</div>
