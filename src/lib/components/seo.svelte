<script lang='ts'>
  export interface SEOProps {
    title: string;
    description: string;
  };

  let { title, description }: SEOProps = $props();
</script>

<svelte:head>
  <title>{title} - Quas UI</title>
  <meta name="description" content={description}/>
</svelte:head>