import RoundSpaceDashboardIcon from "@iconify-react/ic/round-space-dashboard";
import BaselineArchiveIcon from "@iconify-react/ic/baseline-archive";
import BaselineAssignmentIcon from "@iconify-react/ic/baseline-assignment";
import BaselineAssignmentLateIcon from "@iconify-react/ic/baseline-assignment-late";
import BaselineShoppingCartIcon from "@iconify-react/ic/baseline-shopping-cart";
import BaselinePersonIcon from "@iconify-react/ic/baseline-person";
import BaselineInventoryIcon from "@iconify-react/ic/baseline-inventory";
import BaselineHistoryIcon from "@iconify-react/ic/baseline-history";
import BaselineNotificationsIcon from "@iconify-react/ic/baseline-notifications";

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
        name: "Katalog Produk",
        href: "/produk",
        icon: BaselineArchiveIcon,
        exact: true,
        description: "Kelola data produk, harga, dan stok barang Anda.",
    },
    {
        name: "Riwayat Transaksi",
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
    {
        name: "Notif",
        href: "/notif",
        icon: BaselineNotificationsIcon,
        isAdminOnly: true,
        description: "Lihat log aktivitas dan notifikasi sistem.",
    },
    {
        name: "Katalog Gudang",
        href: "/gudang",
        icon: BaselineInventoryIcon,
        isWarehouse: true,
        exact: true,
        description: "Kelola penerimaan barang dan stok segel gudang.",
    },
    {
        name: "Riwayat Buka Segel",
        href: "/gudang/riwayat",
        icon: BaselineHistoryIcon,
        isWarehouse: true,
        description: "Lihat log aktivitas perpindahan stok gudang ke toko.",
    },
];
