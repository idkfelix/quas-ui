<script lang="ts">
	import { page } from "$app/state";
	import { CopyButton } from "$lib/registry/ui/copy-button/index.js";

	let { name }: { name: string } = $props();

	let Component = $derived(page.data.exampleComponents[name]);
	let source = $derived(page.data.exampleSources[name]);
</script>

<div class="relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border">
	<div data-slot="preview" class="flex justify-center">
		<div class="flex min-h-112.5 w-full items-center justify-center border-b p-10">
			{#if Component}
				<Component />
			{:else}
				<span>Example Not Found</span>
			{/if}
		</div>
	</div>
	{#if source}
		<div
			data-slot="code"
			class="relative overflow-hidden [&_pre]:max-h-100 [&_pre:not(.shiki)]:p-0"
		>
			<CopyButton
				text={source.raw}
				class="absolute inset-e-2 top-3 text-muted-foreground"
				variant="ghost"
			/>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html source.styled}
		</div>
	{/if}
</div>
