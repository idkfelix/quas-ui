<script lang="ts">
  import { ButtonAsync } from '$lib/registry/ui/button-async';
</script>

<ButtonAsync 
  onClickPromise={() => {
    return new Promise(resolve => setTimeout(resolve, 500));
  }}
>
  Submit
</ButtonAsync>