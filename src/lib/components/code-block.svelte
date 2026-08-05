<script lang="ts">
	import { CopyButton } from '$lib/registry/ui/copy-button';
	import { cn } from '$lib/utils';
	import { highlightCode } from '$lib/utils/highlighter';

	let {
		code,
		lang,
		class: className,
	}: {
		code: string;
		class?: string;
		lang?: 'svelte' | 'typescript' | 'bash';
	} = $props();

	let cleanCode = $derived(
		code.replaceAll('$lib/registry/ui', '$lib/components/ui').replace(/\t/g, '  ')
	);
	let html = $derived(await highlightCode(cleanCode, lang));
</script>

<div
	data-slot="code"
	class={cn('relative overflow-hidden rounded-lg [&_pre]:max-h-100', className)}
>
	<CopyButton
		variant="ghost"
		class="absolute inset-e-2 top-3 text-muted-foreground"
		text={cleanCode}
	/>
	<figure data-rehype-pretty-code-figure>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html html}
	</figure>
</div>
