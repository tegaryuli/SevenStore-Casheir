import { Link, usePage } from "@inertiajs/react";
import {
    Sidebar,
    SidebarItems,
    SidebarLogo,
    SidebarDivider,
    SidebarFrame,
    SidebarIcon,
} from "@/components/SidebarComponents";

export default function AppSidebar({ navigations = [] }) {
    const { url } = usePage();

    return (
        <Sidebar className="bg-white">
            <SidebarItems>
                <SidebarLogo>
                    <img src="/logo/Logo.svg" alt="Logo Sementara" />
                </SidebarLogo>
                <SidebarDivider />
                {navigations.map((nav) => (
                    <NavItem
                        key={nav.name}
                        nav={nav}
                        isActive={url.startsWith(nav.href)}
                    />
                ))}
            </SidebarItems>
        </Sidebar>
    );
}

function NavItem({ nav, isActive }) {
    return (
        <Link href={nav.href} title={nav.name} prefetch>
            <SidebarFrame className={isActive ? "bg-blue rounded-lg" : ""}>
                <SidebarIcon className={isActive ? "text-white" : ""}>
                    {nav.icon && <nav.icon color="currentColor" />}
                </SidebarIcon>
            </SidebarFrame>
        </Link>
    );
}
