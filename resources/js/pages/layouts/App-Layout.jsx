import AppSidebar from "@/navbar/AppSidebar";
import AppHeadbar from "@/navbar/AppHeadbar";
import { usePage } from "@inertiajs/react";
import RoundSpaceDashboardIcon from "@iconify-react/ic/round-space-dashboard";
import BaselineArchiveIcon from "@iconify-react/ic/baseline-archive";
import BaselineAssignmentIcon from "@iconify-react/ic/baseline-assignment";
import BaselineAssignmentLateIcon from "@iconify-react/ic/baseline-assignment-late";
import BaselineCreditCardIcon from "@iconify-react/ic/baseline-credit-card";

export default function AppLayout({ children }) {
    const { auth } = usePage().props;

    const navigations = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: (props) => <RoundSpaceDashboardIcon {...props} />,
        },
        {
            name: "Kasir",
            href: "/pos",
            icon: (props) => <BaselineCreditCardIcon {...props} />,
        },
        {
            name: "Produk",
            href: "/produk",
            icon: (props) => <BaselineArchiveIcon {...props} />,
        },
        {
            name: "Histori",
            href: "/histori",
            icon: (props) => <BaselineAssignmentIcon {...props} />,
        },
        {
            name: "Laporan",
            href: "/laporan",
            icon: (props) => <BaselineAssignmentLateIcon {...props} />,
        },
    ];

    return (
        <div className="bg-dark h-screen w-full  flex flex-col overflow-hidden font-inter">
            <AppHeadbar user={auth?.user} />
            <div className="h-full flex overflow-hidden  p-2 gap-2">
                <AppSidebar user={auth?.user} navigations={navigations} />
                <main className="bg-white block w-full h-full p-8 rounded-lg overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
