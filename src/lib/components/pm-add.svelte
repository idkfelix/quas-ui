<script lang="ts">
	import { page } from "$app/state";
	import { resolveCommand } from "package-manager-detector/commands";
	import * as Tabs from "$lib/registry/ui/tabs/index.js";
	import { CopyButton } from "$lib/registry/ui/copy-button/index.js";
	import type { Agent } from "package-manager-detector";

	let {
		agents = ["npm", "pnpm", "yarn", "bun"],
		agent = $bindable("bun"),
		name,
	}: {
		agents?: Agent[];
		agent?: Agent;
		name: string;
	} = $props();

	const cmd = $derived(
		resolveCommand(agent, "execute", [
			"shadcn-svelte@latest",
			"add",
			`https://${page.url.host}/r/${name}.json`,
		])
	);
	const commandText = $derived(`${cmd?.command} ${cmd?.args.join(" ")}`);
</script>

<div data-slot="pm-command" class="mt-4 mb-12 w-full rounded-lg border border-border bg-card">
	<div class="flex place-items-center justify-between gap-2 border-b border-border py-1 pr-2">
		<div class="flex place-items-center gap-2 px-2">
			<Tabs.Root bind:value={agent}>
				<Tabs.List class="h-auto bg-transparent p-0">
					{#each agents as pm (pm)}
						<Tabs.Trigger value={pm} class="h-7 font-mono text-sm font-light">
							{pm}
						</Tabs.Trigger>
					{/each}
				</Tabs.List>
			</Tabs.Root>
		</div>
		<CopyButton text={commandText} variant="ghost" class="text-muted-foreground" />
	</div>
	<div class="scrollbar-none overflow-x-auto p-3">
		<span class="font-mono text-sm leading-none font-light text-nowrap text-muted-foreground">
			{commandText}
		</span>
	</div>
</div>
