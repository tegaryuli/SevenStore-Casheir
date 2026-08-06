import AppSidebar from "@/navbar/AppSidebar";
import AppHeadbar from "@/navbar/AppHeadbar";
import { usePage } from "@inertiajs/react";
import { useMemo } from "react";
import { MASTER_NAVIGATIONS } from "@/lib/config/navigations";

export default function AppLayout({ children }) {
    const { auth } = usePage().props;
    const isAdmin = auth?.user?.roles?.some(
        (role) => role.name.toLowerCase() === "admin",
    );
    const isInventaris = auth?.user?.roles?.some(
        (role) => role.name.toLowerCase() === "inventaris",
    );
    const canAccessWarehouse = isAdmin || isInventaris;

    const filteredNavigations = useMemo(() => {
        return MASTER_NAVIGATIONS.filter((nav) => {
            if (nav.isAdminOnly && !isAdmin) return false;
            if (nav.isWarehouse && !canAccessWarehouse) return false;
            return true;
        });
    }, [isAdmin, canAccessWarehouse]);

    return (
        <div className="bg-dark h-screen w-full flex flex-col overflow-hidden font-inter">
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
