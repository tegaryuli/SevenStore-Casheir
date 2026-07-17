import { Link, usePage } from "@inertiajs/react";
import {
    Sidebar,
    SidebarItems,
    SidebarLogo,
    SidebarDivider,
    SidebarFrame,
    SidebarIcon,
} from "@/components/ui/SidebarComponents";

export default function AppSidebar({ navigations = [] }) {
    const { url } = usePage();

    const generalNavs = navigations.filter((nav) => !nav.isAdminOnly);
    const adminNavs = navigations.filter((nav) => nav.isAdminOnly);

    return (
        <Sidebar className="bg-white">
            <SidebarItems>
                <SidebarLogo>
                    <img src="/logo/Logo.svg" alt="Logo Sementara" />
                </SidebarLogo>
                <SidebarDivider />
                <div className="flex flex-col gap-2">
                    {generalNavs.map((nav) => (
                        <NavItem
                            key={nav.name}
                            nav={nav}
                            isActive={url.startsWith(nav.href)}
                        />
                    ))}
                </div>

                {adminNavs.length > 0 && <SidebarDivider />}
                <div className="flex flex-col gap-2">
                    {adminNavs.map((nav) => (
                        <NavItem
                            key={nav.name}
                            nav={nav}
                            isActive={url.startsWith(nav.href)}
                        />
                    ))}
                </div>
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
