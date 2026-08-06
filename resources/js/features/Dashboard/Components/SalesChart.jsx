import React from 'react';
import StandardContainer from "@/components/ui/StandardContainer";
import {
    AreaChart,
    Area,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const formatRp = (num) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(num);
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-dark text-white text-xs py-2 px-3 rounded-lg shadow-lg font-medium">
                <p className="opacity-60 mb-1">{label}</p>
                <p className="text-sm font-bold text-logo-bg">{formatRp(payload[0].value)}</p>
            </div>
        );
    }
    return null;
};

export default function SalesChart({ salesTrend }) {
    return (
        <StandardContainer className="mb-6 shrink-0 !h-fit" noBorder={true}>
            <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-xl font-bold text-dark">Tren Penjualan</h2>
                        <p className="text-sm text-dark opacity-60 mt-1">7 Hari Terakhir</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue/10 flex items-center justify-center text-blue">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
                
                <div className="h-72 w-full mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={salesTrend}
                            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                        >
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0b85ff" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#0b85ff" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis 
                                dataKey="date" 
                                axisLine={false} 
                                tickLine={false} 
                                tick={{ fontSize: 12, fill: '#111113', opacity: 0.5, fontWeight: 500 }}
                                dy={10}
                            />
                            <Tooltip 
                                content={<CustomTooltip />} 
                                cursor={{ stroke: '#0b85ff', strokeWidth: 1, strokeDasharray: '4 4' }} 
                            />
                            <Area 
                                type="monotone" 
                                dataKey="revenue" 
                                stroke="#0b85ff" 
                                strokeWidth={3}
                                fillOpacity={1} 
                                fill="url(#colorRevenue)" 
                                activeDot={{ r: 6, fill: '#0b85ff', stroke: '#fff', strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </StandardContainer>
    );
}
