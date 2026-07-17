import RoundSpaceDashboardIcon from "@iconify-react/ic/round-space-dashboard";
import BaselineArchiveIcon from "@iconify-react/ic/baseline-archive";
import BaselineAssignmentIcon from "@iconify-react/ic/baseline-assignment";
import BaselineAssignmentLateIcon from "@iconify-react/ic/baseline-assignment-late";
import BaselineShoppingCartIcon from "@iconify-react/ic/baseline-shopping-cart";
import BaselinePersonIcon from "@iconify-react/ic/baseline-person";

export const MASTER_NAVIGATIONS = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: RoundSpaceDashboardIcon,
        description: "Ringkasan performa bisnis dan aktivitas toko Anda.",
    },
    {
        name: "Payment",
        href: "/pos",
        icon: BaselineShoppingCartIcon,
        description: "Kelola seluruh transaksi pelanggan Anda di sini.",
    },
    {
        name: "Katalog",
        href: "/produk",
        icon: BaselineArchiveIcon,
        description: "Kelola data produk, harga, dan stok barang Anda.",
    },
    {
        name: "Histori ",
        href: "/histori-transaksi",
        icon: BaselineAssignmentIcon,
        description:
            "Pantau riwayat penjualan, performa kasir, dan aliran uang Anda.",
    },
    {
        name: "Laporan Masuk Staff",
        href: "/laporan/absensi",
        icon: BaselineAssignmentLateIcon,
        isAdminOnly: true,
        description: "Pantau waktu kehadiran dan aktivitas staff Anda.",
    },
];
