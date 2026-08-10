<script lang="ts">
	import { UseBoolean } from "$lib/registry/hooks/use-boolean.svelte.js";
	import { Button } from "$lib/registry/ui/button/index.js";

	const state = new UseBoolean(false);
</script>

<div class="flex gap-2">
	<Button variant="outline" onclick={state.setTrue}>On</Button>
	<Button variant="outline" onclick={state.setFalse}>Off</Button>
	<Button variant="outline" onclick={state.toggle} class="w-12">
		{state.current ? "True" : "False"}
	</Button>
</div>
