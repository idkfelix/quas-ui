<script lang="ts" module>
	import { docs } from "$content/index.js";

	const groups: Record<
		string,
		{
			title: string;
			href: string;
		}[]
	> = {
		Overview: [
			{ title: "Home", href: "/" },
			{ title: "Github", href: "https://github.com/idkfelix/quas-ui" },
		],
		Components: docs
			.filter((doc) => doc.folder === "components")
			.map(({ title, path }) => ({ title, href: `/${path}` })),
		Hooks: docs
			.filter((doc) => doc.folder === "hooks")
			.map(({ title, path }) => ({ title, href: `/${path}` })),
	};
</script>

<script lang="ts">
	import "../app.css";
	import { ModeWatcher } from "mode-watcher";
	import type { LayoutProps } from "./$types.js";

	const { children }: LayoutProps = $props();
</script>

<ModeWatcher />

<div class="flex h-full min-h-svh">
	<div class="sticky top-0 ml-auto hidden h-dvh w-48 flex-col py-16 pl-4 text-xs md:flex">
		{#each Object.entries(groups) as [group, items] (group)}
			<p class="pointer-events-none font-semibold text-muted-foreground">{group}</p>
			<div class="mx-1 my-3 flex flex-col gap-1 border-l-2 border-muted px-2">
				{#each items as item (item.title)}
					<a class="w-fit rounded-md px-2 py-1.5 transition-all hover:bg-muted" href={item.href}
						>{item.title}</a
					>
				{/each}
			</div>
		{/each}
	</div>
	<div class="mx-auto flex w-full max-w-2xl flex-col px-4 py-8 md:mr-auto lg:mx-0">
		{@render children()}
	</div>
	<div class="sticky top-0 mr-auto hidden w-48 lg:flex"></div>
</div>
