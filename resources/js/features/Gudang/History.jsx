import { useState } from "react";
import { Head, router } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import StandardContainer from "@/components/ui/StandardContainer";
import SearchInput from "@/components/ui/SearchInput";
import { H1 } from "@/components/ui/CustomTag";
import KasirSelect from "@/components/KasirSelect";
import BaselineHistoryIcon from "@iconify-react/ic/baseline-history";
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export default function History({ transfers, staffList, selectedUserId }) {
    const [search, setSearch] = useState("");

    const handleFilterChange = (userId) => {
        router.get("/gudang/riwayat", { user_id: userId }, { preserveState: true });
    };

    const filteredTransfers = transfers.filter(
        (t) =>
            t.product?.name.toLowerCase().includes(search.toLowerCase()) ||
            t.user?.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Riwayat Buka Segel" />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Gudang", href: "/gudang" },
                    { label: "Riwayat Buka Segel" },
                ]}
            />
            <H1 />

            <StandardContainer
                header={
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="w-full max-w-sm">
                            <SearchInput
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Cari nama barang atau staf..."
                            />
                        </div>
                        {staffList && staffList.length > 0 && (
                            <KasirSelect 
                                value={selectedUserId}
                                onChange={handleFilterChange}
                                kasirList={staffList}
                                label="Akun:"
                                defaultOption="Semua Akun"
                            />
                        )}
                    </div>
                }
            >
                <div className="overflow-x-auto h-fit">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-low-white">
                                <th className="p-4 text-sm font-semibold text-dark">
                                    Waktu
                                </th>
                                <th className="p-4 text-sm font-semibold text-dark">
                                    Barang
                                </th>
                                <th className="p-4 text-sm font-semibold text-dark text-right">
                                    Segel Dibuka
                                </th>
                                <th className="p-4 text-sm font-semibold text-dark text-right">
                                    Masuk Toko
                                </th>
                                <th className="p-4 text-sm font-semibold text-dark">
                                    Dilakukan Oleh
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransfers.length > 0 ? (
                                filteredTransfers.map((t) => (
                                    <tr
                                        key={t.id}
                                        className="border-b border-low-white hover:bg-low-white/50 transition-colors"
                                    >
                                        <td className="p-4">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-dark">
                                                    {dayjs(t.created_at).format(
                                                        "DD MMM YYYY",
                                                    )}
                                                </span>
                                                <span className="text-xs text-dark opacity-70">
                                                    {dayjs(t.created_at).format(
                                                        "HH:mm",
                                                    )}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 font-semibold text-blue-2">
                                            {t.product?.name ||
                                                "Produk Terhapus"}
                                        </td>
                                        <td className="p-4 text-sm font-bold text-vintage-rouge text-right">
                                            -{t.qty_deducted}{" "}
                                            {t.product?.warehouse_unit}
                                        </td>
                                        <td className="p-4 text-sm font-bold text-green-600 text-right">
                                            +{t.qty_added}{" "}
                                            {t.product?.store_unit}
                                        </td>
                                        <td className="p-4 text-sm text-dark font-medium flex items-center gap-2">
                                            <div className="w-6 h-6 bg-blue/20 rounded-full flex items-center justify-center text-blue-2 text-xs">
                                                {t.user?.name.charAt(0)}
                                            </div>
                                            {t.user?.name}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="5"
                                        className="p-8 text-center text-dark opacity-50"
                                    >
                                        Tidak ada riwayat perpindahan stok.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </StandardContainer>
        </div>
    );
}
