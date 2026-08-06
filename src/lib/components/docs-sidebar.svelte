<script lang="ts">
	import { page } from '$app/state';
	import { docs } from '$content/index';
	import * as Sidebar from '$lib/registry/ui/sidebar';
	import { cn } from '$lib/utils';

	let { class: className }: { class?: string } = $props();
</script>

<Sidebar.Root class={cn('sticky hidden bg-transparent lg:flex', className)} collapsible="none">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel class="font-medium text-muted-foreground">Components</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu class="gap-1">
					{#each docs.filter((d) => d.group === 'components') as { title, path } (path)}
						{@const href = `/docs/${path}`}
						{@const isActive = page.url.pathname === href}
						<Sidebar.MenuButton {isActive} class="w-fit" size="sm">
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
