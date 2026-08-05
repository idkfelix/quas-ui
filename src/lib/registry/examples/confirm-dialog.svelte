<script lang="ts">
	import { Button } from '$lib/registry/ui/button';
	import { confirmDialog } from '$lib/registry/ui/confirm-dialog';
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
