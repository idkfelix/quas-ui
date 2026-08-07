<script lang="ts" context="module">
	export { default as a } from "./a.svelte";
  export { default as h1 } from "./h1.svelte";
  export { default as h2 } from "./h2.svelte";
  export { default as h3 } from "./h3.svelte";
  export { default as p } from "./p.svelte";
  export { default as strong } from "./strong.svelte";
</script>
 
<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>
 
{@render children()}