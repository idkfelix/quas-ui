<script lang="ts">
	import { Button } from '$lib/registry/ui/button';
</script>

<Button
	variant="outline"
	onClickPromise={() => {
		return new Promise((resolve) => setTimeout(resolve, 1000));
	}}
>
	Submit
</Button>
