<script lang="ts">
	import { docs } from "$content/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";
	import { cn } from "$lib/utils.js";

	let { class: className }: { class?: string } = $props();
</script>

<Sidebar.Root class={cn("sticky hidden bg-transparent lg:flex", className)} collapsible="none">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="font-medium text-muted-foreground">Overview</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gap-1">
					<Sidebar.MenuButton class="w-fit hover:bg-none!" size="sm">
						{#snippet child({ props })}
							<a href="/" {...props}>Introduction</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="font-medium text-muted-foreground">Components</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gap-1">
					{#each docs.filter((d) => d.group === "components") as { title, path } (path)}
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
	</Sidebar.Content>
</Sidebar.Root>
