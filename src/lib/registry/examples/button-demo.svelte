<script lang="ts">
	import { Button } from "$lib/registry/ui/button/index.js";
</script>

<Button
	variant="outline"
	onClickPromise={async () => {
		await new Promise((resolve) => setTimeout(resolve, 1000));
	}}
	aria-label="Submit">Submit</Button
>
