import React from 'react';
import { Link } from "@inertiajs/react";
import StandardContainer from "@/components/ui/StandardContainer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/id";

dayjs.extend(relativeTime);
dayjs.locale("id");

export default function RecentActivities({ recentActivities }) {
    return (
        <StandardContainer className="!h-fit" noBorder={true}>
            <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-dark">
                        Aktivitas Terbaru
                    </h2>
                    <Link
                        href="/notif"
                        className="text-sm font-semibold text-blue-2 hover:underline"
                    >
                        Lihat Semua
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    {recentActivities.length > 0 ? (
                        recentActivities.map((log) => (
                            <div
                                key={log.id}
                                className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-8 h-8 rounded-full bg-blue/10 flex items-center justify-center text-blue-2 flex-shrink-0 mt-0.5">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col flex-1">
                                    <span className="text-sm text-dark font-medium line-clamp-2">
                                        {log.description}
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-xs font-semibold text-blue-2">
                                            {log.user?.name || "Sistem"}
                                        </span>
                                        <span className="text-[10px] text-dark opacity-50">
                                            • {dayjs(log.created_at).fromNow()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-6 text-dark opacity-50 text-sm">
                            Belum ada aktivitas.
                        </div>
                    )}
                </div>
            </div>
        </StandardContainer>
    );
}
