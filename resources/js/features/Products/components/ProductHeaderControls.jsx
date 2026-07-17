import { Link } from "@inertiajs/react";
import SelectInput from "@/components/ui/SelectInput";

export default function ProductHeaderControls({
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    categories,
    viewMode,
    setViewMode,
    setIsCategoryModalOpen,
}) {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 flex-1">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg
                            className="h-5 w-5 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Cari produk atau SKU..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-64 pl-10 pr-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2"
                    />
                </div>
                <SelectInput
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    options={categories.map((cat) => ({
                        value: cat.id.toString(),
                        label: cat.name,
                    }))}
                    defaultOption="Semua Kategori"
                    defaultOptionValue="all"
                    className="w-full md:max-w-[200px]"
                />
            </div>

            <div className="flex gap-2 flex-wrap md:flex-nowrap">
                <div className="flex p-1 bg-gray-50 border border-low-white rounded-xl">
                    <button
                        onClick={() => setViewMode("grid")}
                        className={`p-1.5 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-blue-2" : "text-gray-400 hover:text-blue-2"}`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        onClick={() => setViewMode("table")}
                        className={`p-1.5 rounded-lg transition-colors ${viewMode === "table" ? "bg-white shadow-sm text-blue-2" : "text-gray-400 hover:text-blue-2"}`}
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                <button
                    onClick={() => setIsCategoryModalOpen(true)}
                    className="px-4 py-2 bg-gray-50 border border-low-white text-blue-2 font-medium rounded-xl hover:bg-gray-100 transition-colors text-sm flex items-center shadow-sm"
                >
                    Kelola Kategori
                </button>
                <Link
                    href="/produk/create"
                    className="px-5 py-2 bg-blue-2 text-white font-medium rounded-xl hover:bg-blue-9 transition-colors text-sm flex items-center shadow-sm whitespace-nowrap"
                >
                    <svg
                        className="w-5 h-5 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                    </svg>
                    Tambah Produk
                </Link>
            </div>
        </>
    );
}
