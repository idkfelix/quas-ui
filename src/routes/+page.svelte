<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { UseBoolean } from '$lib/registry/hooks/use-boolean.svelte';
	import { confirmDialog } from '$lib/registry/ui/confirm-dialog/index.js';

	const x = new UseBoolean(false);
</script>

<Button
	onclick={() => {
		confirmDialog('title', 'desc', x.toggle);
	}}>{x.current}</Button
>
