import { useRef } from "react";

export default function DatePickerButton({
    selectedDate,
    onChange,
    disabled = false,
    label = "Tanggal:",
    className = "",
}) {
    const dateInputRef = useRef(null);

    const openDatePicker = () => {
        if (disabled) return;
        if (dateInputRef.current) {
            try {
                dateInputRef.current.showPicker();
            } catch (e) {
                dateInputRef.current.focus();
            }
        }
    };

    return (
        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 ${className}`}>
            {label && (
                <label
                    className={`text-sm font-semibold text-gray-500 ${
                        disabled ? "" : "cursor-pointer"
                    }`}
                    onClick={disabled ? undefined : openDatePicker}
                >
                    {label}
                </label>
            )}
            <div
                className={`bg-white border border-low-white rounded-full shadow-sm flex items-center px-4 py-1.5 transition-all select-none relative ${
                    disabled
                        ? "opacity-70 bg-gray-50"
                        : "hover:shadow-md hover:border-blue-200 cursor-pointer group"
                }`}
                onClick={disabled ? undefined : openDatePicker}
            >
                <svg
                    className={`w-5 h-5 transition-colors pointer-events-none flex-shrink-0 ${
                        disabled
                            ? "text-gray-300"
                            : "text-gray-400 group-hover:text-blue-2"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                </svg>
                <span
                    className={`px-2 py-1 font-medium select-none pointer-events-none whitespace-nowrap ${
                        disabled ? "text-gray-400" : "text-dark"
                    }`}
                >
                    {selectedDate
                        ? new Date(selectedDate).toLocaleDateString("id-ID", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                          })
                        : "Pilih Tanggal"}
                </span>
                <input
                    ref={dateInputRef}
                    type="date"
                    value={selectedDate || ""}
                    onChange={disabled ? undefined : onChange}
                    disabled={disabled}
                    className="absolute opacity-0 w-0 h-0 p-0 m-0 border-none pointer-events-none"
                />
            </div>
        </div>
    );
}
