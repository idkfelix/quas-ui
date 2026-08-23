<script lang="ts">
	import { page } from "$app/state";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import * as Popover from "$lib/components/ui/popover/index.js";
	import { Navigation } from "$lib/components/index.js";

	let open = $state(false);
	$effect(() => {
		if (page.url.pathname) {
			open = false;
		}
	});
</script>

<Popover.Root bind:open>
	<Popover.Trigger class="relative flex md:hidden">
		<MenuIcon class="size-6" />
	</Popover.Trigger>
	<Popover.Content class="h-dvh w-dvw bg-background px-4 shadow-none ring-0" preventScroll>
		<Navigation />
	</Popover.Content>
</Popover.Root>
