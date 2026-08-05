<script lang="ts">
	import CodeBlock from './code-block.svelte';
	import type { Snippet } from 'svelte';

	let { example, children }: { example: string; children?: Snippet } = $props();
</script>

<div
	class="no-prose-docs group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border"
>
	<div>
		<div data-slot="preview" class="preview flex justify-center">
			<div class="preview flex min-h-112.5 w-full items-center justify-center border-b p-10">
				{@render children?.()}
			</div>
		</div>
		<CodeBlock code={example} class="rounded-none" />
	</div>
</div>
