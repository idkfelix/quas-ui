<script lang="ts">
	import InfoIcon from "@lucide/svelte/icons/info";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import * as Table from "$lib/components/ui/table/index.js";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import type { PropSchema } from "$lib/references/index.js";

	let { props = {} }: { props: Record<string, PropSchema> } = $props();
</script>

<Table.Root>
	<Table.Header class="pointer-events-none">
		<Table.Row class="*:text-muted-foreground">
			<Table.Head class="w-1/3">Property</Table.Head>
			<Table.Head class="w-1/4">Type</Table.Head>
			<Table.Head class="w-5/12">Description</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body class="[&_tr:last-child]:border-b!">
		{#each Object.entries(props) as [prop, schema] (prop)}
			<Table.Row>
				<Table.Cell class="flex items-center gap-2 leading-none">
					<code>{prop}</code>
					{#if schema.required}
						<Badge variant="destructive">required</Badge>
					{/if}
					{#if schema.bindable}
						<Badge variant="outline" class="border-mauve-300 text-mauve-300">$bindable</Badge>
					{/if}
				</Table.Cell>
				<Table.Cell class="text-muted-foreground">
					<code>{schema.type}</code>
					{#if schema.variant === "complex"}
						<Popover.Root>
							<Popover.Trigger>
								<InfoIcon class="ml-1 inline size-3" />
							</Popover.Trigger>
							<Popover.Content class="w-fit">
								<code>{schema.definition}</code>
							</Popover.Content>
						</Popover.Root>
					{/if}
				</Table.Cell>
				<Table.Cell class="flex flex-col gap-2 [&_code]:text-muted-foreground">
					<p>{schema.description}</p>
					<code>Default: {schema.default || "——"}</code>
				</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
