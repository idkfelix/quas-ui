<script lang="ts">
	import ApiTable from "./api-table.svelte";
	import type { ParentRef } from "./api.js";

	let { name: parent, components }: ParentRef = $props();
</script>

{#each Object.entries(components) as [name, component] (name)}
	<ApiTable {parent} {name} {...component} />
{/each}
