import React from 'react';
import AppLayout from "@/layouts/App-Layout";
import SummaryCards from "./components/SummaryCards";
import SalesChart from "./components/SalesChart";
import TopProducts from "./components/TopProducts";
import RecentActivities from "./components/RecentActivities";

export default function DashboardPage({
    summary,
    salesTrend,
    topProducts,
    recentActivities,
    isAdmin,
}) {
    return (
        <div className="w-full text-blue-2 font-inter flex flex-col relative overflow-y-auto pb-10">
            <h1 className="text-2xl font-bold text-dark mb-2">Dashboard</h1>
            <p className="text-dark opacity-60 mb-6">
                Selamat datang kembali, pantau performa tokomu hari ini.
            </p>

            <SummaryCards summary={summary} />

            <SalesChart salesTrend={salesTrend} />

            <div
                className={`grid grid-cols-1 ${isAdmin ? "lg:grid-cols-2" : ""} gap-6 shrink-0`}
            >
                <TopProducts topProducts={topProducts} />
                {isAdmin && <RecentActivities recentActivities={recentActivities} />}
            </div>
        </div>
    );
}

DashboardPage.layout = (page) => <AppLayout>{page}</AppLayout>;
