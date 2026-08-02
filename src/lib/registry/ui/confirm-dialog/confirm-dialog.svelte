<script lang="ts" module>
	import { mount, unmount } from 'svelte';
	import { ConfirmDialog } from './index.ts';

	export type ConfirmDialogVariant = 'default' | 'destructive';
	export type ConfirmDialogProps = {
		title: string;
		description: string;
		callback: () => void;
		variant?: ConfirmDialogVariant;
		requestDestroy: () => void;
	};

	export const confirmDialog = (
		title: string,
		description: string,
		callback: () => void,
		variant?: ConfirmDialogVariant
	) => {
		const instance = mount(ConfirmDialog, {
			target: document.body,
			props: {
				title,
				description,
				variant,
				callback,
				requestDestroy: () => unmount(instance),
			},
		});
	};
</script>

<script lang="ts">
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';

	let {
		title,
		description,
		callback,
		variant = 'default',
		requestDestroy,
	}: ConfirmDialogProps = $props();

	const onclick = () => {
		callback();
		requestDestroy();
	};
</script>

<AlertDialog.Root open={true}>
	<AlertDialog.Content>
		<AlertDialog.Header>
			<AlertDialog.Title>{title}</AlertDialog.Title>
			<AlertDialog.Description>{description}</AlertDialog.Description>
		</AlertDialog.Header>
		<AlertDialog.Footer>
			<AlertDialog.Cancel onclick={requestDestroy}>Cancel</AlertDialog.Cancel>
			<AlertDialog.Action {onclick} {variant}>
				{variant == 'destructive' ? 'Delete' : 'Confirm'}
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
