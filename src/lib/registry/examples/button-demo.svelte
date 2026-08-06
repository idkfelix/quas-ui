<script lang="ts">
	import { Button } from '$lib/registry/ui/button';

	const onClickPromise = () => {
		return new Promise((resolve) => setTimeout(resolve, 1000));
	};
</script>

<div class="flex gap-2">
	<Button {onClickPromise}>Submit</Button>
	<Button variant="secondary">Button</Button>
	<Button variant="outline">Button</Button>
	<Button variant="ghost">Button</Button>
	<Button variant="destructive">Button</Button>
</div>
