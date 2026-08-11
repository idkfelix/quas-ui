<script lang="ts">
	import type { PageProps } from "./$types.js";

	let { data }: PageProps = $props();
	const Markdown = $derived(data.doc);
</script>

<Markdown metadata={data.metadata} />
