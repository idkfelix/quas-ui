<script lang="ts" module>
	import { docs } from "$content/index.js";

	type SidebarGroup = {
		title: string;
		items: {
			title: string;
			href: string;
		}[];
	};

	const groups: SidebarGroup[] = [
		{
			title: "Overview",
			items: [
				{ title: "Home", href: "/" },
				{ title: "Github", href: "https://github.com/idkfelix/quas-ui" },
			],
		},
		{
			title: "Components",
			items: docs
				.filter((doc) => doc.folder === "components")
				.map(({ title, path }) => ({ title, href: `/${path}` })),
		},
		{
			title: "Hooks",
			items: docs
				.filter((doc) => doc.folder === "hooks")
				.map(({ title, path }) => ({ title, href: `/${path}` })),
		},
	];
</script>

<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<Sidebar.Provider class="flex h-full min-h-svh" style="--sidebar-width: calc(var(--spacing) * 48)">
	<Sidebar.Root class="sticky top-0 ml-auto hidden bg-transparent py-8 md:flex" collapsible="none">
		<Sidebar.Content>
			{#each groups as { title, items } (title)}
				<Sidebar.Group>
					<Sidebar.GroupLabel class="font-medium text-muted-foreground">
						{title}
					</Sidebar.GroupLabel>
					<Sidebar.GroupContent>
						<Sidebar.MenuSub class="gap-1">
							{#each items as { title, href } (title)}
								<Sidebar.MenuSubButton class="w-fit" size="sm">
									{#snippet child({ props })}
										<a {href} target={href.at(0) !== "/" ? "_blank" : ""} {...props}>{title}</a>
									{/snippet}
								</Sidebar.MenuSubButton>
							{/each}
						</Sidebar.MenuSub>
					</Sidebar.GroupContent>
				</Sidebar.Group>
			{/each}
		</Sidebar.Content>
	</Sidebar.Root>
	<div class="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 md:mr-auto lg:mx-0">
		{@render children()}
	</div>
	<div class="sticky top-0 mr-auto hidden w-(--sidebar-width) lg:flex"></div>
</Sidebar.Provider>
