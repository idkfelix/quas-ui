<script lang="ts">
	import { SidebarProvider } from "$lib/registry/ui/sidebar";
	import DocsSidebar from "$lib/components/docs-sidebar.svelte";
	import type { LayoutProps } from "./$types";

	const { children }: LayoutProps = $props();
</script>

<SidebarProvider class="max-h-dvh px-2" style="--sidebar-width: 14rem;">
	<DocsSidebar class="ml-auto py-10" />
	<div class="mx-auto flex w-full max-w-2xl scrollbar-none flex-col overflow-x-scroll py-8 lg:mx-4">
		{@render children()}
	</div>
	<div class="mr-auto hidden w-(--sidebar-width) py-10 lg:flex">
		<!-- Right Sidebar -->
	</div>
</SidebarProvider>
