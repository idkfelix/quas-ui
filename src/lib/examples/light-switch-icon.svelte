<script lang="ts">
	import Lightbulb from "@lucide/svelte/icons/lightbulb";
	import LightbulbOff from "@lucide/svelte/icons/lightbulb-off";
	import { LightSwitch } from "$lib/registry/ui/light-switch/index.js";
</script>

<LightSwitch variant="outline" lightIcon={Lightbulb} darkIcon={LightbulbOff} />
