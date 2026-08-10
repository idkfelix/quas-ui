<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import Sidebar from "$lib/components/sidebar.svelte";
	import { SidebarProvider } from "$lib/registry/ui/sidebar/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<SidebarProvider class="max-h-dvh px-2" style="--sidebar-width: 14rem;">
	<Sidebar class="ml-auto hidden py-10 lg:flex" />
	<div class="mx-auto flex w-full max-w-2xl scrollbar-none flex-col overflow-x-scroll py-8 lg:mx-4">
		{@render children()}
	</div>
	<div class="sticky mr-auto hidden w-(--sidebar-width) py-10 lg:flex"></div>
</SidebarProvider>
