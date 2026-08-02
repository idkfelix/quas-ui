<script lang="ts">
	import { AsyncButton } from '$lib/registry/ui/async-button/index.js';
</script>

<AsyncButton 
	variant='outline'
	onClickPromise={async () => {
		await new Promise(resolve => setTimeout(resolve, 1000))
	}}
>
	test
</AsyncButton>
