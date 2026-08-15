<script lang="ts" generics="T extends object">
	import InfoIcon from "@lucide/svelte/icons/info";
	import * as Popover from "$lib/registry/ui/popover/index.js";
	import * as Table from "$lib/registry/ui/table/index.js";
	import { Badge } from "$lib/registry/ui/badge/index.js";
	import { Separator } from "$lib/registry/ui/separator/index.js";
	import type { ComponentRef, DataAttrReference, PropReference } from "./api.js";

	type Props = Partial<ComponentRef<T>> & { parent?: string; name: string };
	let { parent, name, props, dataAttrs }: Props = $props();
</script>

<div class="mt-4 mb-2 font-medium">
	<code class="flex w-min rounded-lg border bg-card px-3 py-1 text-base">
		{#if parent}
			<span class="text-muted-foreground">{parent}.</span>
		{/if}
		<span>{name}</span>
	</code>
</div>

<section>
	{#if props && Object.entries(props).length > 0}
		<Table.Root>
			<Table.Header class="pointer-events-none">
				<Table.Row class="*:text-muted-foreground">
					<Table.Head class="w-1/3">Property</Table.Head>
					<Table.Head class="w-1/4">Type</Table.Head>
					<Table.Head class="w-5/12">Description</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each Object.entries(props) as [prop, value] (prop)}
					{@const ref = value as PropReference}
					<Table.Row>
						<Table.Cell class="flex items-center gap-2 leading-none">
							<code>{prop}</code>
							{#if ref.required}
								<Badge variant="destructive">required</Badge>
							{/if}
							{#if ref.bindable}
								<Badge variant="outline" class="border-mauve-300 text-mauve-300">$bindable</Badge>
							{/if}
						</Table.Cell>
						<Table.Cell class="text-muted-foreground">
							<code>{ref.type}</code>
							{#if ref.tooltip}
								<Popover.Root>
									<Popover.Trigger>
										<InfoIcon class="ml-1 inline size-3" />
									</Popover.Trigger>
									<Popover.Content class="w-fit">
										<code>{ref.tooltip}</code>
									</Popover.Content>
								</Popover.Root>
							{/if}
						</Table.Cell>
						<Table.Cell class="flex flex-col gap-2 [&_code]:text-muted-foreground">
							<p>{ref.description}</p>
							<code>Default: {ref.defaultValue || "——"}</code>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<Separator class="mb-6 last-of-type:mb-10" />
	{/if}

	{#if dataAttrs && Object.entries(dataAttrs).length > 0}
		<Table.Root>
			<Table.Header class="pointer-events-none">
				<Table.Row class="*:font-bold *:text-muted-foreground">
					<Table.Head class="w-1/3">Data Attribute</Table.Head>
					<Table.Head class="w-1/4">Value</Table.Head>
					<Table.Head class="w-5/12">Description</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each Object.entries(dataAttrs) as [attr, value] (attr)}
					{@const ref = value as DataAttrReference}
					<Table.Row>
						<Table.Cell>
							<code>{attr}</code>
						</Table.Cell>
						<Table.Cell class="text-muted-foreground">
							<code>{ref.value || "——"}</code>
							{#if ref.tooltip}
								<Popover.Root>
									<Popover.Trigger>
										<InfoIcon class="ml-1 inline size-3" />
									</Popover.Trigger>
									<Popover.Content class="w-fit">
										<code>{ref.tooltip}</code>
									</Popover.Content>
								</Popover.Root>
							{/if}
						</Table.Cell>
						<Table.Cell>
							<p>{ref.description}</p>
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
		<Separator class="mb-6 last-of-type:mb-10" />
	{/if}
</section>
