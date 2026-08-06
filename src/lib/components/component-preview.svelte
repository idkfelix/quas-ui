<script lang="ts">
	import { page } from "$app/state";
	import { CopyButton } from "$lib/registry/ui/copy-button";
	import type { Component } from "svelte";

	const exampleComponents = $derived(
		(page.data.exampleComponents ?? {}) as Record<string, Component>
	);

	const exampleSources = $derived((page.data.exampleSources ?? {}) as Record<string, string>);

	let { name }: { name: string } = $props();
	let Preview = $derived(exampleComponents[name]);
	let source = $derived(exampleSources[name]);
</script>

<div class="relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border">
	<div data-slot="preview" class="flex justify-center">
		<div class="flex min-h-112.5 w-full items-center justify-center border-b p-10">
			<Preview />
		</div>
	</div>
	<div data-slot="code" class="relative overflow-hidden [&_pre]:max-h-100 [&_pre:not(.shiki)]:p-0">
		<CopyButton
			text={page.data.exampleSourcesRaw[name]}
			class="absolute inset-e-2 top-3 text-muted-foreground"
			variant="ghost"
		/>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html source}
	</div>
</div>
