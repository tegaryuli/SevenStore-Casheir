import { Head, Link, router } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import StandardContainer from "@/components/ui/StandardContainer";
import AppLayout from "../../layouts/App-Layout";
import DatePickerButton from "@/components/ui/DatePickerButton";
import { H1 } from "@/components/ui/CustomTag";

export default function Attendances({ attendances, selectedDate }) {
    const handleDateChange = (e) => {
        router.get(
            "/laporan/absensi",
            { date: e.target.value },
            { preserveState: true },
        );
    };

    const formatDate = (dateString) => {
        const options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };
        return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    const formatTime = (dateString) => {
        const options = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return new Date(dateString).toLocaleTimeString("id-ID", options);
    };

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Laporan Absensi" />

            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Laporan Absensi" },
                ]}
            />
            <div className="flex flex-row justify-between ">
                <H1 />
                <DatePickerButton
                    selectedDate={selectedDate}
                    onChange={handleDateChange}
                />
            </div>

            <StandardContainer
                header={
                    <table className="w-full text-left text-sm text-blue-2 relative ">
                        <thead className="bg-blue-1/10 sticky top-0 z-20">
                            <tr>
                                <th className="px-6 font-semibold text-blue-2">
                                    No
                                </th>
                                <th className="px-6 font-semibold text-blue-2 ">
                                    Staff / Karyawan
                                </th>
                                <th className="px-6 font-semibold text-blue-2 ">
                                    Waktu Kehadiran
                                </th>
                                <th className="px-6 font-semibold text-blue-2 ">
                                    Tanggal
                                </th>
                            </tr>
                        </thead>
                    </table>
                }
            >
                <div className="flex-1 overflow-x-auto custom-scrollbar">
                    <table className="w-full text-left text-sm text-dark relative">
                        <tbody className="divide-y divide-low-white bg-white">
                            {attendances.data && attendances.data.length > 0 ? (
                                attendances.data.map((att, index) => (
                                    <tr
                                        key={att.id}
                                        className="hover:bg-blue-50/50 transition-colors"
                                    >
                                        <td className="px-6 py-4 font-medium text-gray-500">
                                            {attendances.from + index}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-dark flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-1 flex items-center justify-center text-blue-2 font-bold text-xs uppercase">
                                                {att.user?.name?.charAt(0) ||
                                                    "?"}
                                            </div>
                                            {att.user?.name || "Unknown"}
                                        </td>
                                        <td className="px-6 py-4 font-bold text-blue-2">
                                            <span className="bg-blue-50 px-3 py-1 rounded-full text-xs">
                                                {formatTime(att.created_at)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 font-medium">
                                            {formatDate(att.created_at)}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="px-6 py-12 text-center"
                                    >
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <svg
                                                className="w-12 h-12 mb-3 text-gray-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>
                                            <p className="text-base font-semibold text-gray-500">
                                                Belum ada data absensi untuk
                                                tanggal ini.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {attendances.last_page > 1 && (
                    <div className="mt-6 flex justify-center gap-2 pb-4">
                        {attendances.links.map((link, idx) => (
                            <Link
                                key={idx}
                                href={link.url || "#"}
                                className={`px-4 py-2 text-sm font-medium rounded-lg border transition-colors ${
                                    link.active
                                        ? "bg-blue-2 text-white border-blue-2"
                                        : !link.url
                                          ? "bg-gray-50 text-gray-400 border-low-white cursor-not-allowed"
                                          : "bg-white text-dark border-low-white hover:bg-blue-50 hover:text-blue-2 hover:border-blue-2"
                                }`}
                                preserveState
                                dangerouslySetInnerHTML={{
                                    __html: link.label,
                                }}
                            />
                        ))}
                    </div>
                )}
            </StandardContainer>
        </div>
    );
}

Attendances.layout = (page) => <AppLayout>{page}</AppLayout>;
