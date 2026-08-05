<script lang="ts">
	import { confirmDialog } from '$lib/registry/blocks/confirm-dialog';
	import { Button } from '$lib/registry/ui/button';
</script>

<Button
	onclick={() =>
		confirmDialog({
			title: 'Are you sure?',
			description: 'This is permanent.',
			onConfirm: () => {},
		})}
>
	Action
</Button>
