<script lang="ts" context="module">
	export { default as p } from "./p.svelte";
	export { default as h1 } from "./h1.svelte";
	export { default as h2 } from "./h2.svelte";
	export { default as h3 } from "./h3.svelte";
	export { default as h4 } from "./h4.svelte";
	export { default as li } from "./li.svelte";
	export { default as ol } from "./ol.svelte";
	export { default as ul } from "./ul.svelte";
	export { default as hr } from "./hr.svelte";
	export { default as strong } from "./strong.svelte";
	export { Root as a } from "$lib/registry/ui/link/index.js";
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	let { children }: { children: Snippet } = $props();
</script>

{@render children()}
