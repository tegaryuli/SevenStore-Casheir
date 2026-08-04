import { useState, useMemo } from "react";
import { Head } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import StandardContainer from "@/components/ui/StandardContainer";
import KasirSelect from "@/components/KasirSelect";
import DatePickerButton from "@/components/ui/DatePickerButton";

export default function Index({ logs }) {
    const [selectedUser, setSelectedUser] = useState("all");
    const [selectedDate, setSelectedDate] = useState(() => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    });

    const userOptions = useMemo(() => {
        const usersMap = new Map();
        logs.forEach((log) => {
            if (log.user) {
                usersMap.set(log.user.id, log.user.name);
            }
        });

        return Array.from(usersMap.entries()).map(([id, name]) => ({
            id: id.toString(),
            name: name,
        }));
    }, [logs]);

    const filteredLogs = useMemo(() => {
        return logs.filter((log) => {
            const matchUser =
                selectedUser === "all" ||
                log.user_id?.toString() === selectedUser;

            let matchDate = true;
            if (selectedDate) {
                const logDate = new Date(log.created_at);
                const year = logDate.getFullYear();
                const month = String(logDate.getMonth() + 1).padStart(2, '0');
                const day = String(logDate.getDate()).padStart(2, '0');
                const localDateString = `${year}-${month}-${day}`;
                
                matchDate = localDateString === selectedDate;
            }

            return matchUser && matchDate;
        });
    }, [logs, selectedUser, selectedDate]);

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Notifikasi & Log Aktivitas" />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Notifikasi" },
                ]}
            />

            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4 mb-4">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-dark">Notifikasi</h1>
                    <p className="text-dark opacity-60 text-sm">
                        Log aktivitas sistem dan pemberitahuan terbaru
                    </p>
                </div>

                <div className="flex flex-row gap-4 items-center">
                    <KasirSelect
                        value={selectedUser}
                        onChange={(val) => setSelectedUser(val)}
                        kasirList={userOptions}
                        label=""
                        defaultOption="Semua Akun"
                    />
                    <DatePickerButton
                        selectedDate={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        label=""
                    />
                </div>
            </div>

            <StandardContainer>
                <div className="flex flex-col gap-3 p-4">
                    {filteredLogs.length === 0 ? (
                        <div className="text-center py-10 text-dark opacity-50">
                            Belum ada notifikasi atau log aktivitas untuk filter
                            ini.
                        </div>
                    ) : (
                        filteredLogs.map((log) => (
                            <div
                                key={log.id}
                                className="bg-white border border-low-white rounded-lg p-4 flex flex-col gap-2 shadow-sm"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-blue-2">
                                        {log.user?.name || "Sistem"}
                                        <span className="text-dark opacity-60 font-normal text-sm ml-2">
                                            ({log.action})
                                        </span>
                                    </span>
                                    <span className="text-xs text-dark opacity-60">
                                        {new Date(
                                            log.created_at,
                                        ).toLocaleString("id-ID")}
                                    </span>
                                </div>
                                <p className="text-dark text-sm">
                                    {log.description}
                                </p>
                            </div>
                        ))
                    )}
                </div>
            </StandardContainer>
        </div>
    );
}
