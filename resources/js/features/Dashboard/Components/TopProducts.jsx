import React from "react";
import StandardContainer from "@/components/ui/StandardContainer";

export default function TopProducts({ topProducts }) {
    return (
        <div className="max-w-4xl">
            <StandardContainer noBorder={true} className="!h-fit ">
                <div className="p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-bold text-dark">
                            Produk Terlaris
                        </h2>
                        <span className="text-xs font-medium text-dark opacity-60 bg-gray-100 px-2 py-1 rounded">
                            Bulan Ini
                        </span>
                    </div>
                    <div className="flex flex-col gap-3">
                        {topProducts.length > 0 ? (
                            topProducts.map((p, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-blue/10 text-blue-2 flex items-center justify-center font-bold text-sm">
                                            {idx + 1}
                                        </div>
                                        <span className="font-semibold text-dark">
                                            {p.product_name}
                                        </span>
                                    </div>
                                    <span className="font-bold text-blue-2">
                                        {p.total_sold} terjual
                                    </span>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-6 text-dark opacity-50 text-sm">
                                Belum ada transaksi bulan ini.
                            </div>
                        )}
                    </div>
                </div>
            </StandardContainer>
        </div>
    );
}
