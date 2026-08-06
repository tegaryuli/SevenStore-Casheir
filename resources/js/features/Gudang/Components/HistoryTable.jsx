import React from 'react';
import dayjs from "dayjs";
import "dayjs/locale/id";

dayjs.locale("id");

export default function HistoryTable({ filteredTransfers }) {
    return (
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
    );
}
