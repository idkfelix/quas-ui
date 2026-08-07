<script lang="ts">
	import { page } from "$app/state";
	import PMCmd from "$lib/components/pm-cmd.svelte";

	let { name }: { name: string } = $props();
</script>

<PMCmd
	command="execute"
	args={["shadcn-svelte@latest", "add", `https://${page.url.host}/r/${name}.json`]}
/>
