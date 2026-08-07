<script lang="ts">
  import { page } from '$app/state';
  import PMCommand from '$lib/components/pm-command.svelte';

  let { name }: { name: string } = $props();
</script>

<PMCommand 
  command="execute" 
  args={[
    "shadcn-svelte@latest", 
    "add", 
    `https://${page.url.host}/r/${name}.json`
  ]} 
/>
