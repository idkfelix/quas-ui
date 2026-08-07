<script lang="ts" module>
	export type PMCommandProps = {
		class?: string;
		agents?: Agent[];
		agent?: Agent;
		command: Command;
		args: string[];
	};
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Command, Agent } from 'package-manager-detector';
	import { resolveCommand } from 'package-manager-detector/commands';
	import * as Tabs from '$lib/registry/ui/tabs';
  import { CopyButton } from '$lib/registry/ui/copy-button';
  import TerminalIcon from "@lucide/svelte/icons/terminal";

	let {
		class: className,
		agents = ['bun', 'npm', 'pnpm', 'yarn'],
		agent = $bindable('bun'),
		command,
		args,
	}: PMCommandProps = $props();

	const cmd = $derived(resolveCommand(agent, command, args));
	const commandText = $derived(`${cmd?.command} ${cmd?.args.join(' ')}`);
</script>

<div data-slot="pm-command" class={cn('border-border w-full rounded-lg border mt-4 mb-12 bg-card', className)}>
	<div class="border-border flex place-items-center justify-between gap-2 border-b py-1 pr-2">
		<div class="flex place-items-center gap-2 px-2">
      <TerminalIcon class="size-4 text-code" />
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
    <CopyButton text={commandText} variant='ghost'/>
	</div>
	<div class="scrollbar-none overflow-x-auto p-3">
		<span class="text-muted-foreground font-mono text-sm leading-none font-light text-nowrap">
			{commandText}
		</span>
	</div>
</div>