import { Link, usePage } from "@inertiajs/react";
import {
    Sidebar,
    SidebarItems,
    SidebarLogo,
    SidebarDivider,
    SidebarFrame,
    SidebarIcon,
} from "@/components/ui/SidebarComponents";
import SidebarUserDropup from "@/components/SidebarUserDropup";

export default function AppSidebar({ navigations = [] }) {
    const { url } = usePage();
    const { auth } = usePage().props;
    const currentUser = auth?.user;

    const generalNavs = navigations.filter(
        (nav) => !nav.isAdminOnly && nav.name !== "Notif",
    );
    const adminNavs = navigations.filter(
        (nav) => nav.isAdminOnly && nav.name !== "Notif",
    );
    const notifNav = navigations.find((nav) => nav.name === "Notif");

    return (
        <Sidebar>
            <SidebarItems>
                <SidebarLogo>
                    <img src="/logo/Logo-Apps.svg" alt="Logo Sementara" />
                </SidebarLogo>
                <SidebarDivider />

                {notifNav && (
                    <>
                        <div className="flex flex-col gap-2 w-full">
                            <NavItem
                                key={notifNav.name}
                                nav={notifNav}
                                isActive={
                                    notifNav.exact
                                        ? url === notifNav.href
                                        : url === notifNav.href ||
                                          url.startsWith(notifNav.href + "/")
                                }
                            />
                        </div>
                        <SidebarDivider />
                    </>
                )}
                <div className="flex flex-col gap-2 w-full">
                    {generalNavs.map((nav) => (
                        <NavItem
                            key={nav.name}
                            nav={nav}
                            isActive={
                                nav.exact
                                    ? url === nav.href
                                    : url === nav.href ||
                                      url.startsWith(nav.href + "/")
                            }
                        />
                    ))}
                </div>

                {adminNavs.length > 0 && <SidebarDivider />}
                <div className="flex flex-col gap-2 w-full">
                    {adminNavs.map((nav) => (
                        <NavItem
                            key={nav.name}
                            nav={nav}
                            isActive={
                                nav.exact
                                    ? url === nav.href
                                    : url === nav.href ||
                                      url.startsWith(nav.href + "/")
                            }
                        />
                    ))}
                </div>
            </SidebarItems>

            <div className="mt-auto w-full flex flex-col gap-4 pt-4">
                <SidebarUserDropup user={currentUser} />
            </div>
        </Sidebar>
    );
}

function NavItem({ nav, isActive }) {
    return (
        <Link href={nav.href} title={nav.name} prefetch className="w-full">
            <SidebarFrame className={isActive ? "bg-blue rounded-lg" : ""}>
                <SidebarIcon
                    className={isActive ? "text-blue-2" : "text-white"}
                >
                    {nav.icon && <nav.icon color="currentColor" />}
                </SidebarIcon>
            </SidebarFrame>
        </Link>
    );
}
