<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import { Navigation } from "$lib/components/index.js";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<div class="flex h-full min-h-svh">
	<div class="sticky top-0 ml-auto hidden h-dvh w-48 py-16 pl-4 md:flex">
		<Navigation />
	</div>
	<div class="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 md:mr-auto lg:mx-0">
		{@render children()}
	</div>
	<div class="sticky top-0 mr-auto hidden w-48 lg:flex"></div>
</div>
