import React from "react";
import { Link, usePage } from "@inertiajs/react";
import StandardContainer from "@/components/ui/StandardContainer";
import Breadcrumb from "@/components/Breadcrumb";
import BaselinePersonIcon from "@iconify-react/ic/baseline-person";
import BaselinePeopleIcon from "@iconify-react/ic/baseline-people";
import {
    Sidebar,
    SidebarItems,
    SidebarFrame,
    SidebarIcon,
} from "@/components/ui/SidebarComponents";

export default function SettingsLayout({ children }) {
    const { props, url } = usePage();
    const { auth } = props;
    const isAdmin = auth?.user?.roles?.some(role => role.name.toLowerCase() === "admin");

    const navItems = [
        {
            name: "Profil",
            href: "/settings/profile",
            icon: BaselinePersonIcon,
            active: url.startsWith("/settings/profile"),
            show: true,
        },
        {
            name: "Pengelolaan User",
            href: "/settings/users",
            icon: BaselinePeopleIcon,
            active: url.startsWith("/settings/users"),
            show: isAdmin,
        },
    ];

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Pengaturan" },
                ]}
            />

            <StandardContainer noBorder={true} noPadding={true}>
                <div className="flex flex-row h-full w-full">
                    <Sidebar className="bg-white border-r border-gray-100 flex-shrink-0 !w-64 !items-stretch">
                        <div className="p-4">
                            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-2">
                                Menu Pengaturan
                            </h2>
                            <SidebarItems>
                                {navItems
                                    .filter((item) => item.show)
                                    .map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            prefetch
                                            className="w-full"
                                        >
                                            <SidebarFrame
                                                className={`w-full flex-row !justify-start transition-all duration-200 ${
                                                    item.active
                                                        ? "bg-blue text-white shadow-md shadow-blue/20"
                                                        : "text-gray-500 hover:bg-gray-50 hover:text-blue-2"
                                                }`}
                                            >
                                                <SidebarIcon
                                                    className={
                                                        item.active
                                                            ? "text-white"
                                                            : "text-gray-500"
                                                    }
                                                >
                                                    <item.icon className="text-xl" />
                                                </SidebarIcon>
                                                <span className="font-medium text-sm ml-2">
                                                    {item.name}
                                                </span>
                                            </SidebarFrame>
                                        </Link>
                                    ))}
                            </SidebarItems>
                        </div>
                    </Sidebar>
                    <main className="flex-1 overflow-y-auto p-6 md:p-8 relative">
                        {children}
                    </main>
                </div>
            </StandardContainer>
        </div>
    );
}
