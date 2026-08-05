<script lang="ts">
  import type { LayoutProps } from './$types';
  import { SidebarProvider } from '$lib/registry/ui/sidebar';
  import DocsSidebar from '$lib/components/docs-sidebar.svelte';

	const { children, data }: LayoutProps = $props();
</script>

<SidebarProvider class='px-2 max-h-dvh' style='--sidebar-width: 14rem;'>
  <DocsSidebar links={data.navLinks} class='ml-auto py-10'/>
  <div class="flex w-full max-w-2xl flex-col py-8 mx-auto lg:mx-4 overflow-x-scroll scrollbar-none">
    {@render children()}
  </div>
  <div class="w-(--sidebar-width) hidden lg:flex mr-auto py-10">
    <!-- Right Sidebar -->
  </div>
</SidebarProvider>
