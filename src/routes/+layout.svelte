<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Navigation } from "$lib/components/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<div class="flex h-full min-h-svh">
	<aside class="sticky top-0 ml-auto hidden h-dvh max-w-56 min-w-56 py-16 pl-4 md:block">
		<Navigation />
	</aside>
	<main class="mx-auto flex w-full max-w-2xl min-w-0 flex-col px-4 py-8 md:ml-0 xl:mr-0">
		{@render children()}
	</main>
	<span class="mr-auto hidden max-w-56 min-w-56 xl:block"></span>
</div>
