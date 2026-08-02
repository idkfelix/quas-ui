<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher'

	const { children } = $props();
</script>

<ModeWatcher/>
<div class="h-dvh grid place-items-center">
	{@render children()}
</div>
