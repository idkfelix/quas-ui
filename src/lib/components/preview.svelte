<script lang="ts">
	import type { Snippet } from 'svelte';

	let { demo, example }: { demo: Snippet; example?: Snippet } = $props();
</script>

<div
	class="no-prose-docs group relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border"
>
	<div>
		<div data-slot="preview" class="preview flex justify-center">
			<div class="preview flex min-h-112.5 w-full items-center justify-center border-b p-10">
				{@render demo()}
			</div>
		</div>
		<div
			data-slot="code"
			class="relative overflow-hidden [&_pre]:max-h-100 [&_pre:not(.shiki)]:p-0"
		>
			{@render example?.()}
		</div>
	</div>
</div>
