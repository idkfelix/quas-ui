<script lang="ts">
	import { page } from '$app/state';
	import * as Sidebar from '$lib/registry/ui/sidebar';
	import { cn } from '$lib/utils';
	import type { NavLink } from '$lib/utils/nav.server';

	let { componentLinks, blockLinks, class: className }: { componentLinks: NavLink[]; blockLinks: NavLink[]; class?: string } = $props();
</script>

<Sidebar.Root class={cn('sticky hidden bg-transparent lg:flex', className)} collapsible="none">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="font-medium text-muted-foreground">Components</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gap-1">
					{#each componentLinks as { title, href } (href)}
						<Sidebar.MenuButton
							isActive={page.url.pathname === href}
							class="w-fit text-[0.8rem] font-medium"
							size="sm"
						>
							{#snippet child({ props })}
								<a {href} {...props}>{title}</a>
							{/snippet}
						</Sidebar.MenuButton>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="font-medium text-muted-foreground">Blocks</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gap-1">
					{#each blockLinks as { title, href } (href)}
						<Sidebar.MenuButton
							isActive={page.url.pathname === href}
							class="w-fit text-[0.8rem] font-medium"
							size="sm"
						>
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
