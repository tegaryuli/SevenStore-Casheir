export default function KasirSelect({ value, onChange, kasirList, className = "" }) {
    return (
        <div className={`flex flex-col sm:flex-row sm:items-center gap-2 ${className}`}>
            <label className="text-sm font-semibold text-gray-500">
                Kasir:
            </label>
            <select
                value={value || "all"}
                onChange={(e) => onChange(e.target.value)}
                className="text-center bg-white border border-low-white rounded-full px-4 py-2 text-sm font-medium text-dark focus:outline-none focus:ring-0 hover:border-blue-200 transition-colors cursor-pointer"
            >
                <option value="all">Semua Kasir</option>
                {kasirList?.map((k) => (
                    <option key={k.id} value={k.id}>
                        {k.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
