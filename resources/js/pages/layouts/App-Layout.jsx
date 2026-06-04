import SidebarLayout from "@/navbar/SidebarLayout";
import { usePage } from "@inertiajs/react";
import { TokensIcon, CubeIcon } from "@radix-ui/react-icons";

export default function AppLayout({ children }) {
    const { auth } = usePage().props;

    const navigations = [
        { name: 'Dashboard', href: '/dashboard', icon: TokensIcon },
        { name: 'Produk', href: '/produk', icon: CubeIcon },
    ];

    return (
        <SidebarLayout user={auth?.user} navigations={navigations}>
            <main className="bg-surface p-2 flex-1 relative h-screen overflow-y-auto">
                <div className="p-2 max-h-full h-full rounded-xl bg-background">
                    {children}
                </div>
            </main>
        </SidebarLayout>
    );
}
