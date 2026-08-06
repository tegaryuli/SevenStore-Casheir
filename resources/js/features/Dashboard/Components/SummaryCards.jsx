import React from 'react';

const formatRp = (num) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(num);
};

export default function SummaryCards({ summary }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 shrink-0">
            <div className="bg-white border border-low-white rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-dark opacity-60">Omset Hari Ini</p>
                    <p className="text-2xl font-bold text-blue-2">{formatRp(summary.todayRevenue)}</p>
                </div>
                <div className="w-12 h-12 bg-blue/10 rounded-full flex items-center justify-center text-blue-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

            <div className="bg-white border border-low-white rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-dark opacity-60">Transaksi Hari Ini</p>
                    <p className="text-2xl font-bold text-blue-2">{summary.todayCount}</p>
                </div>
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                </div>
            </div>

            <div className="bg-white border border-low-white rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-dark opacity-60">Profit Hari Ini</p>
                    <p className="text-2xl font-bold text-green-600">{formatRp(summary.todayProfit)}</p>
                </div>
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                </div>
            </div>

            <div className="bg-white border border-low-white rounded-xl p-5 shadow-sm flex items-center justify-between">
                <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium text-dark opacity-60">Stok Tipis</p>
                    <p className="text-2xl font-bold text-vintage-rouge">{summary.lowStockCount}</p>
                </div>
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-vintage-rouge">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
