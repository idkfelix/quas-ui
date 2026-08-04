<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	const { children } = $props();
</script>

<ModeWatcher />
<div class='w-2xl mx-auto py-8'>
	{@render children()}
</div>
