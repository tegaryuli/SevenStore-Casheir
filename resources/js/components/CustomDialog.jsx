export default function CustomDialog({
    isOpen,
    title,
    message,
    type = "alert",
    onConfirm,
    onClose,
}) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div
                    className={`p-4 text-white font-bold text-lg ${type === "alert" ? "bg-orange-500" : "bg-red-500"}`}
                >
                    {title}
                </div>
                <div className="p-6 text-blue-2 font-medium leading-relaxed">
                    {message}
                </div>
                <div className="p-4 bg-white flex justify-end gap-3 border-t border-low-white">
                    {type === "confirm" && (
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 bg-white border border-low-white text-dark rounded-xl font-medium hover:bg-low-white/40 transition"
                        >
                            Batal
                        </button>
                    )}
                    <button
                        onClick={() => {
                            if (type === "confirm" && onConfirm) {
                                onConfirm();
                            }
                            onClose();
                        }}
                        className={`px-5 py-2.5 text-white font-bold rounded-xl shadow-md transition ${type === "alert" ? "bg-orange-500 hover:bg-orange-600" : "bg-red-500 hover:bg-red-600"}`}
                    >
                        {type === "confirm" ? "Ya, Lanjutkan" : "Mengerti"}
                    </button>
                </div>
            </div>
        </div>
    );
}
