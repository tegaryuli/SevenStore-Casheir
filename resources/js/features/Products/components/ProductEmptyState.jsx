export default function ProductEmptyState() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <svg
                className="w-12 h-12 text-blue-2/30 mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                ></path>
            </svg>
            <span className="text-sm font-bold text-blue-2">
                Tidak ada produk ditemukan
            </span>
            <span className="text-xs text-blue-2/60 mt-1">
                Coba sesuaikan kata kunci atau filter kategori Anda.
            </span>
        </div>
    );
}
