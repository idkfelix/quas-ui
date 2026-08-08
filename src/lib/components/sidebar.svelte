<script lang="ts">
	import { docs } from "$content/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import { cn } from "$lib/utils.js";

	const groups = Object.groupBy(docs, (doc) => doc.folder);
	let { class: className }: { class?: string } = $props();
</script>

<Sidebar.Root class={cn("sticky hidden bg-transparent lg:flex", className)} collapsible="none">
	<Sidebar.Content>
		{#each Object.entries(groups) as [groupName, groupDocs] (groupName)}
			<Sidebar.Group>
				<Sidebar.GroupLabel class="font-medium text-muted-foreground capitalize">
					{groupName}
				</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.Menu class="gap-1">
						{#each groupDocs as { title, path } (path)}
							{@const href = `/${path}`}
							<Sidebar.MenuButton class="w-fit" size="sm">
								{#snippet child({ props })}
									<a {href} {...props}>{title}</a>
								{/snippet}
							</Sidebar.MenuButton>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
</Sidebar.Root>
