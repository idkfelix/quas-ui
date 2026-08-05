<script lang="ts">
  import { ButtonAsync } from '$lib/registry/ui/button-async';
</script>

<ButtonAsync 
  variant="outline"
  onClickPromise={() => {
    return new Promise(resolve => setTimeout(resolve, 1000));
  }}
>
  Submit
</ButtonAsync>