<script lang="ts">
	import { docs } from "$content/index.js";
	import * as Sidebar from "$lib/registry/ui/sidebar/index.js";

	const groups = [
		{ title: "Overview", docs: docs.filter((doc) => doc.folder === "root") },
		{ title: "Components", docs: docs.filter((doc) => doc.folder === "components") },
		{ title: "Hooks", docs: docs.filter((doc) => doc.folder === "hooks") },
	];
</script>

<Sidebar.Root class="sticky top-0 ml-auto hidden bg-transparent py-8 md:flex" collapsible="none">
	<Sidebar.Content>
		{#each groups as { title, docs } (title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel class="font-medium text-muted-foreground">
					{title}
				</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					<Sidebar.MenuSub class="gap-1">
						{#each docs as { title, path } (path)}
							{@const href = `/${path.replace("index", "")}`}
							<Sidebar.MenuSubButton class="w-fit" size="sm">
								{#snippet child({ props })}
									<a {href} {...props}>{title}</a>
								{/snippet}
							</Sidebar.MenuSubButton>
						{/each}
					</Sidebar.MenuSub>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
	</Sidebar.Content>
</Sidebar.Root>
