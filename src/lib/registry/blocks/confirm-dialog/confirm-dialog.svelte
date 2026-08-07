<script lang="ts" module>
	import { mount, unmount } from "svelte";
	import type { ButtonVariant } from "$lib/registry/ui/button/index.js";
	import { ConfirmDialog } from "./index.ts";

	export type ConfirmDialogProps = {
		title: string;
		description: string;
		variant?: ButtonVariant;
		onConfirm: () => void;
		requestDestroy: () => void;
	};

	export const confirmDialog = (props: Omit<ConfirmDialogProps, "requestDestroy">) => {
		const instance = mount(ConfirmDialog, {
			target: document.body,
			props: {
				...props,
				requestDestroy: () => unmount(instance),
			},
		});
	};
</script>

<script lang="ts">
	import * as AlertDialog from "$lib/registry/ui/alert-dialog/index.js";

	let {
		title,
		description,
		variant = "default",
		onConfirm,
		requestDestroy,
	}: ConfirmDialogProps = $props();

	const onclick = () => {
		onConfirm();
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
				{variant === "destructive" ? "Delete" : "Confirm"}
			</AlertDialog.Action>
		</AlertDialog.Footer>
	</AlertDialog.Content>
</AlertDialog.Root>
