<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import XIcon from "@lucide/svelte/icons/x";
	import { UseClipboard } from "$lib/registry/hooks/use-clipboard.svelte.js";
	import { Button } from "$lib/registry/ui/button/index.js";

	let clipboard = new UseClipboard();
</script>

<Button variant="outline" size="icon-lg" onclick={() => clipboard.copy("Hello World!")}>
	{#if clipboard.copied === true}
		<CheckIcon />
	{:else if clipboard.copied === false}
		<XIcon />
	{:else}
		<CopyIcon />
	{/if}
</Button>
