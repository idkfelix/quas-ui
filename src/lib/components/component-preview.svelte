<script lang="ts">
	import { page } from "$app/state";
	import CodeBlock from "$lib/components/code-block.svelte";

	let { name }: { name: string } = $props();
	
	let Preview = $derived(page.data.exampleComponents[name]);
</script>

<div class="relative mt-4 mb-12 flex flex-col overflow-hidden rounded-lg border">
	<div data-slot="preview" class="flex justify-center">
		<div class="flex min-h-112.5 w-full items-center justify-center border-b p-10">
			<Preview />
		</div>
	</div>
	<CodeBlock {name}/>
</div>
