<script lang='ts'>
  import type { NavLink } from "$lib/utils/nav.server";
  import * as Sidebar from "$lib/registry/ui/sidebar";
  import { page } from "$app/state";
  import { cn } from "$lib/utils";
  
  let { links, class: className }: { links: NavLink[], class?: string } = $props()
</script>

<Sidebar.Root
  class={cn("bg-transparent hidden lg:flex sticky", className)}
  collapsible="none"
>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.GroupLabel class='text-muted-foreground font-medium'>Components</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu class="gap-1">
          {#each links as {title, href} (href)}
            <Sidebar.MenuButton 
              isActive={page.url.pathname === href}
              class='w-fit text-[0.8rem] font-medium'
              size='sm'
            >
              {#snippet child({ props })}
                <a {href} {...props}>{title}</a>
              {/snippet}
            </Sidebar.MenuButton>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>