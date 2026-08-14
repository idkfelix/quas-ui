<script lang="ts">
	import ApiTable from "./api-table.svelte";
	import type { HookRef } from "./api.ts";

	let { name, props, methods }: HookRef = $props();
</script>

<ApiTable {name} {props} {methods} />
