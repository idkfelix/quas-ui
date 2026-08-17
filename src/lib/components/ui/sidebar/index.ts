import Content from "./sidebar-content.svelte";
import GroupContent from "./sidebar-group-content.svelte";
import GroupLabel from "./sidebar-group-label.svelte";
import Group from "./sidebar-group.svelte";
import MenuItem from "./sidebar-menu-item.svelte";
import MenuSubButton from "./sidebar-menu-sub-button.svelte";
import MenuSub from "./sidebar-menu-sub.svelte";
import Menu from "./sidebar-menu.svelte";
import Provider from "./sidebar-provider.svelte";
import Root from "./sidebar.svelte";
import { useSidebar } from "./context.svelte.js";

export {
	Content,
	Group,
	GroupContent,
	GroupLabel,
	Menu,
	MenuItem,
	MenuSub,
	MenuSubButton,
	Provider,
	Root,
	//
	Root as Sidebar,
	Content as SidebarContent,
	Group as SidebarGroup,
	GroupContent as SidebarGroupContent,
	GroupLabel as SidebarGroupLabel,
	Menu as SidebarMenu,
	MenuItem as SidebarMenuItem,
	MenuSub as SidebarMenuSub,
	MenuSubButton as SidebarMenuSubButton,
	Provider as SidebarProvider,
	useSidebar,
};
