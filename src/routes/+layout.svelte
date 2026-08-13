<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import Sidebar from "$lib/components/sidebar.svelte";
	import { SidebarProvider } from "$lib/registry/ui/sidebar/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<SidebarProvider class="flex max-h-dvh" style="--sidebar-width: calc(var(--spacing) * 48)">
	<Sidebar class="hidden py-8 md:flex" />
	<div
		class="md: mx-auto ml-auto flex max-w-2xl flex-1 scrollbar-none flex-col overflow-x-scroll px-4 py-8"
	>
		{@render children()}
	</div>
	<div class="hidden w-(--sidebar-width) lg:flex"></div>
</SidebarProvider>
