<script lang="ts">
	import MenuIcon from "@lucide/svelte/icons/menu";
	import XIcon from "@lucide/svelte/icons/x";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Navigation } from "$lib/components/index.js";

	let open = $state(false);
</script>

<Popover.Root bind:open>
	<Popover.Trigger class="group relative flex md:hidden">
		<XIcon
			class="size-6 scale-0 rotate-90 transition-all group-data-open:scale-100 group-data-open:rotate-0"
		/>
		<MenuIcon
			class="absolute size-6 scale-100 rotate-0 transition-all group-data-open:scale-0 group-data-open:-rotate-90"
		/>
	</Popover.Trigger>
	<Popover.Content
		class="h-dvh w-dvw bg-background/90 px-4 shadow-none ring-0 transition-none"
		sideOffset={16}
		preventScroll
	>
		<Navigation />
	</Popover.Content>
</Popover.Root>
