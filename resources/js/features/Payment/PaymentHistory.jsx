import { useState, useRef } from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import AppLayout from "../../layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { H1 } from "@/components/ui/CustomTag";
import StandardContainer from "@/components/ui/StandardContainer";
import DatePickerButton from "@/components/ui/DatePickerButton";
import KasirSelect from "@/components/KasirSelect";

export default function TransactionHistory({
    transactions,
    summary,
    selectedDate,
    selectedUserId,
    kasirList,
}) {
    const { auth } = usePage().props;
    const isKasir = auth?.user?.role?.name === "kasir";

    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [dialogConfig, setDialogConfig] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "alert",
        onConfirm: null,
    });

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const viewDetails = (transaction) => {
        setSelectedTransaction(transaction);
    };

    const handleFilterChange = (key, value) => {
        const queryParams = {
            date: selectedDate,
            user_id: selectedUserId || "all",
        };
        queryParams[key] = value;
        router.get("/histori-transaksi", queryParams, { preserveState: true });
    };

    return (
        <div className="w-full h-full text-foreground font-inter flex flex-col overflow-hidden">
            <Head title="Histori Transaksi" />

            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Histori Transaksi" },
                ]}
            />
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div className="flex flex-row justify-between w-full">
                    <H1 />
                    <div className="flex flex-row gap-4">
                        {!isKasir && (
                            <KasirSelect 
                                value={selectedUserId}
                                onChange={(val) => handleFilterChange("user_id", val)}
                                kasirList={kasirList}
                                className="mr-2"
                            />
                        )}
                        <DatePickerButton
                            selectedDate={selectedDate}
                            onChange={(e) =>
                                handleFilterChange("date", e.target.value)
                            }
                            disabled={isKasir}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3"></div>
            </div>

            <StandardContainer
                header={
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full select-none">
                        <div className="bg-blue-2 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                            <div className="relative z-10">
                                <p className="text-white/80 text-sm font-medium mb-1">
                                    Omset (Tanggal Terpilih)
                                </p>
                                <h3 className="text-3xl font-bold">
                                    {formatRupiah(summary.revenue)}
                                </h3>
                            </div>
                            <svg
                                className="absolute right-0 bottom-0 w-32 h-32 text-white/10 -mr-6 -mb-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-low-white shadow-sm flex items-center">
                            <div className="w-12 h-12 bg-red-100 text-red-500 rounded-xl flex items-center justify-center mr-4">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    Kembalian Keluar (Terpilih)
                                </p>
                                <h3 className="text-2xl font-bold text-red-500">
                                    {formatRupiah(summary.change)}
                                </h3>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-low-white shadow-sm flex items-center">
                            <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mr-4">
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm font-medium mb-1">
                                    Total Transaksi (Terpilih)
                                </p>
                                <h3 className="text-2xl font-bold text-dark">
                                    {summary.transactions}{" "}
                                    <span className="text-base font-normal text-gray-400">
                                        struk
                                    </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                }
            >
                <div className="flex-1 overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left text-sm text-dark relative">
                        <thead className="bg-gray-50 border-b border-low-white text-xs uppercase text-gray-500 font-semibold sticky top-0 z-10 shadow-sm">
                            <tr>
                                <th className="px-6 py-4">Waktu & Tanggal</th>
                                <th className="px-6 py-4">No. Invoice</th>
                                <th className="px-6 py-4">Kasir</th>
                                <th className="px-6 py-4">Total Belanja</th>
                                <th className="px-6 py-4 text-center">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y">
                            {transactions.data.map((tx) => (
                                <tr
                                    key={tx.id}
                                    className="hover:bg-gray-50 transition-colors"
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-medium">
                                            {formatDate(tx.created_at)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-mono text-blue-2 bg-blue-50 px-2 py-1 rounded-md">
                                            {tx.invoice_number}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-2 flex items-center justify-center text-xs font-bold mr-2">
                                                {tx.user?.name
                                                    ? tx.user.name
                                                          .charAt(0)
                                                          .toUpperCase()
                                                    : "?"}
                                            </div>
                                            {tx.user?.name || "Sistem"}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-bold text-dark">
                                        {formatRupiah(tx.total_amount)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {tx.status === "completed" ? (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Selesai
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                Dibatalkan
                                            </span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <button
                                            onClick={() => viewDetails(tx)}
                                            className="text-blue-2 hover:text-blue-9 font-medium hover:underline bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition"
                                        >
                                            Lihat Detail
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {transactions.data.length === 0 && (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="px-6 py-12 text-center text-gray-500"
                                    >
                                        Belum ada data transaksi tercatat.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </StandardContainer>

            {/* Detail Modal */}
            {selectedTransaction && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/40 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="px-6 py-4 border-b border-low-white flex justify-between items-center bg-blue-2 text-white">
                            <div>
                                <h2 className="text-xl font-bold">
                                    Detail Transaksi
                                </h2>
                                <p className="text-xs text-white/70 font-mono mt-1">
                                    {selectedTransaction.invoice_number}
                                </p>
                            </div>
                            <button
                                onClick={() => setSelectedTransaction(null)}
                                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                            <div className="bg-white border border-low-white rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50 border-b border-low-white text-gray-500 uppercase text-xs">
                                        <tr>
                                            <th className="px-4 py-3 text-left">
                                                Produk
                                            </th>
                                            <th className="px-4 py-3 text-center">
                                                Qty
                                            </th>
                                            <th className="px-4 py-3 text-right">
                                                Harga Jual
                                            </th>
                                            <th className="px-4 py-3 text-right text-green-600 bg-green-50/50">
                                                Profit/Item
                                            </th>
                                            <th className="px-4 py-3 text-right">
                                                Subtotal
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-low-white">
                                        {selectedTransaction.items.map(
                                            (item, idx) => (
                                                <tr
                                                    key={idx}
                                                    className="hover:bg-gray-50/50"
                                                >
                                                    <td className="px-4 py-3 font-medium text-dark">
                                                        {item.product_name}
                                                    </td>
                                                    <td className="px-4 py-3 text-center">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="px-4 py-3 text-right">
                                                        {formatRupiah(
                                                            item.price,
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-medium text-green-600 bg-green-50/30">
                                                        +
                                                        {formatRupiah(
                                                            item.profit /
                                                                item.quantity,
                                                        )}
                                                    </td>
                                                    <td className="px-4 py-3 text-right font-bold">
                                                        {formatRupiah(
                                                            item.subtotal,
                                                        )}
                                                    </td>
                                                </tr>
                                            ),
                                        )}
                                    </tbody>
                                    <tfoot className="bg-gray-50 border-t-2 border-low-white">
                                        <tr>
                                            <td
                                                colSpan="3"
                                                className="px-4 py-3 text-right font-semibold text-gray-500"
                                            >
                                                Total Profit & Belanja:
                                            </td>
                                            <td className="px-4 py-3 text-right font-bold text-green-600">
                                                +
                                                {formatRupiah(
                                                    selectedTransaction.items.reduce(
                                                        (sum, item) =>
                                                            sum +
                                                            parseFloat(
                                                                item.profit,
                                                            ),
                                                        0,
                                                    ),
                                                )}
                                            </td>
                                            <td className="px-4 py-3 text-right font-bold text-xl text-blue-2">
                                                {formatRupiah(
                                                    selectedTransaction.total_amount,
                                                )}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-low-white shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Informasi Kasir
                                    </p>
                                    <p className="font-semibold text-dark">
                                        {selectedTransaction.user?.name ||
                                            "Sistem"}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {formatDate(
                                            selectedTransaction.created_at,
                                        )}
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-low-white shadow-sm">
                                    <p className="text-xs text-gray-500 mb-1">
                                        Informasi Pembayaran
                                    </p>
                                    <div className="flex justify-between text-sm mt-1">
                                        <span className="text-gray-500">
                                            Tunai Diterima:
                                        </span>
                                        <span className="font-medium text-dark">
                                            {formatRupiah(
                                                selectedTransaction.cash_given,
                                            )}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-1">
                                        <span className="text-gray-500">
                                            Kembalian:
                                        </span>
                                        <span className="font-medium text-orange-500">
                                            {formatRupiah(
                                                selectedTransaction.change_amount,
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

TransactionHistory.layout = (page) => <AppLayout>{page}</AppLayout>;
