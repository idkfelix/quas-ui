<script lang="ts">
	import type { APISchema } from "$lib/references/types.js";
	import DataAttrsTable from "./data-attrs-table.svelte";
	import PropsTable from "./props-table.svelte";

	let { schemas = [], prefix }: { schemas: APISchema[]; prefix?: string } = $props();
</script>

{#each schemas as schema (schema.title)}
	<div class="mt-4 w-min rounded-lg border bg-card px-3 py-1">
		<code class="flex text-base font-medium">
			{#if prefix}
				<span class="text-muted-foreground">{prefix}.</span>
			{/if}
			<span>{schema.title}</span>
		</code>
	</div>

	<div class="mt-4 mb-12 flex flex-col gap-8">
		{#if Object.entries(schema.props).length > 0}
			<PropsTable props={schema.props} />
		{/if}
		{#if schema.dataAttrs.length > 0}
			<DataAttrsTable dataAttrs={schema.dataAttrs} />
		{/if}
	</div>
{/each}
