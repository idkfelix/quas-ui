<script lang="ts">
	import * as Button from "$lib/registry/ui/button/index.js";
</script>

<Button.Root
	variant="outline"
	aria-label="Submit"
	onClickPromise={async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}}
>
	<Button.Spinner />
	Submit
</Button.Root>
