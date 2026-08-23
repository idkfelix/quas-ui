<script lang="ts" module>
	import { docs } from "$content/index.js";

	type Groups = {
		[group: string]: {
			title: string;
			href: string;
		}[];
	};

	const groups: Groups = {
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
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
</script>

<ScrollArea orientation="vertical" scrollbarYClasses="hidden" class="h-full text-xs">
	{#each Object.entries(groups) as [group, items] (group)}
		<p class="font-semibold text-muted-foreground">{group}</p>
		<div class="mx-1 my-3 flex flex-col gap-1 border-l-2 border-muted px-2">
			{#each items as { title, href } (title)}
				<a
					class="w-fit rounded-md px-2 py-1.5 transition-all hover:bg-muted"
					target={href.at(0) != "/" ? "_blank" : undefined}
					{href}>{title}</a
				>
			{/each}
		</div>
	{/each}
</ScrollArea>
