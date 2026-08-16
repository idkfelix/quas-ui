<script lang="ts">
	import InfoIcon from "@lucide/svelte/icons/info";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import * as Table from "$lib/registry/ui/table/index.js";
	import type { DataAttrSchema } from "$lib/references/index.js";

	let { dataAttrs = [] }: { dataAttrs: DataAttrSchema[] } = $props();
</script>

<Table.Root>
	<Table.Header class="pointer-events-none">
		<Table.Row class="*:font-bold *:text-muted-foreground">
			<Table.Head class="w-1/3">Data Attribute</Table.Head>
			<Table.Head class="w-1/4">Value</Table.Head>
			<Table.Head class="w-5/12">Description</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body class="[&_tr:last-child]:border-b!">
		{#each dataAttrs as attr (attr.name)}
			<Table.Row>
				<Table.Cell>
					<code>{attr.name}</code>
				</Table.Cell>
				<Table.Cell class="text-muted-foreground">
					<code>{attr.variant === "enum" ? "enum" : attr.value || "——"}</code>
					{#if attr.variant === "enum"}
						<Popover.Root>
							<Popover.Trigger>
								<InfoIcon class="ml-1 inline size-3" />
							</Popover.Trigger>
							<Popover.Content class="w-fit">
								<code>{attr.value}</code>
							</Popover.Content>
						</Popover.Root>
					{/if}
				</Table.Cell>
				<Table.Cell>
					<p>{attr.description}</p>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
