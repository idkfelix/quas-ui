<script lang="ts">
	import ApiTable from "./api-table.svelte";
	import type { ComponentReference } from "./api.js";

	let { name: parent, components }: ComponentReference = $props();
</script>

{#each Object.entries(components) as [name, component] (name)}
	<ApiTable {parent} {name} {...component} />
{/each}
