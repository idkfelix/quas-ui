<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	const { children } = $props();
</script>

<ModeWatcher />
<div class="grid h-dvh place-items-center">
	{@render children()}
</div>
