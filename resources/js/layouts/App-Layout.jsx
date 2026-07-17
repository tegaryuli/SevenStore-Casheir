import AppSidebar from "@/navbar/AppSidebar";
import AppHeadbar from "@/navbar/AppHeadbar";
import { usePage } from "@inertiajs/react";
import { useMemo } from "react";
import { MASTER_NAVIGATIONS } from "@/lib/config/navigations";

export default function AppLayout({ children }) {
    const { auth } = usePage().props;
    const userRole = auth?.user?.role?.name;

    const filteredNavigations = useMemo(() => {
        return MASTER_NAVIGATIONS.filter(
            (nav) => !nav.isAdminOnly || userRole === "admin",
        );
    }, [userRole]);

    return (
        <div className="bg-dark h-screen w-full flex flex-col overflow-hidden font-inter">
            <AppHeadbar user={auth?.user} />
            <div className="h-full flex overflow-hidden p-2 gap-2">
                <AppSidebar
                    user={auth?.user}
                    navigations={filteredNavigations}
                />
                <main className="bg-white block w-full h-full p-8 rounded-lg overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
