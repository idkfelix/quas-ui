<script lang="ts">
	import { Input } from "$lib/registry/ui/input/index.js";
	import { Label } from "$lib/registry/ui/label/index.js";

	const id = $props.id();
</script>

<div class="flex w-full max-w-xs flex-col gap-2">
	<Label for="email-{id}">Email</Label>
	<Input type="email" id="email-{id}" placeholder="Email" />
</div>
