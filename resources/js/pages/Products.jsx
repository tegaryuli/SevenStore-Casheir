import { useState, useMemo } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "./layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryManagerModal from "@/components/CategoryManagerModal";
import { ProductGridItem, ProductTableRow } from "@/components/ProductItem";

export default function Products({ products, categories }) {
    const [viewMode, setViewMode] = useState("table"); // 'grid' or 'table'
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

    // Filter products based on search and selected category
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                                product.sku.toLowerCase().includes(search.toLowerCase());
            
            // Check if product has the selected category in its categories array
            const matchCategory = selectedCategory === "all" || 
                product.categories.some(c => c.id.toString() === selectedCategory);
                
            return matchSearch && matchCategory;
        });
    }, [products, search, selectedCategory]);

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const handleDeleteProduct = (id, name) => {
        if (confirm(`PERINGATAN: Apakah Anda yakin ingin menghapus produk "${name}"?\nTindakan ini tidak dapat dibatalkan!`)) {
            router.delete(`/produk/${id}`, { preserveScroll: true });
        }
    };

    return (
        <div className="w-full h-full text-foreground font-inter">
            <Head title="Katalog Produk" />

            <Breadcrumb items={[
                { label: "Dashboard", href: "/dashboard" },
                { label: "Produk" }
            ]} />
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-blue-2 tracking-tight">Katalog Produk</h1>
                    <p className="mt-2 text-sm text-gray-500">Kelola daftar produk, stok, dan multi-kategori.</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Cari produk atau SKU..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-64 focus:outline-none focus:ring-2 focus:ring-blue-2 focus:border-transparent text-sm text-blue-2"
                        />
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2 bg-white max-w-[150px] truncate"
                    >
                        <option value="all">Semua Kategori</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>

                    <div className="flex p-1 bg-gray-100 rounded-xl">
                        <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white shadow-sm text-blue" : "text-gray-400 hover:text-blue-2"}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        </button>
                        <button onClick={() => setViewMode("table")} className={`p-1.5 rounded-lg transition-colors ${viewMode === "table" ? "bg-white shadow-sm text-blue" : "text-gray-400 hover:text-blue-2"}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
                        </button>
                    </div>

                    <button onClick={() => setIsCategoryModalOpen(true)} className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-colors text-sm flex items-center shadow-sm">
                        Kelola Kategori
                    </button>

                    <Link href="/produk/create" className="px-5 py-2 bg-blue-2 text-white font-medium rounded-xl hover:bg-blue-9 transition-colors text-sm flex items-center shadow-md">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                        Tambah Produk
                    </Link>
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    <h3 className="text-lg font-medium text-blue-2">Tidak ada produk ditemukan</h3>
                    <p className="text-gray-500 text-sm mt-1">Coba sesuaikan kata kunci atau filter kategori Anda.</p>
                </div>
            ) : (
                <>
                    {viewMode === "grid" && (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                            {filteredProducts.map((product) => (
                                <ProductGridItem 
                                    key={product.id} 
                                    product={product} 
                                    formatRupiah={formatRupiah} 
                                    onDelete={handleDeleteProduct} 
                                />
                            ))}
                        </div>
                    )}

                    {viewMode === "table" && (
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm text-blue-2">
                                    <thead className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold">
                                        <tr>
                                            <th className="px-6 py-4">Produk</th>
                                            <th className="px-6 py-4">SKU</th>
                                            <th className="px-6 py-4">Kategori (N:M)</th>
                                            <th className="px-6 py-4">Harga</th>
                                            <th className="px-6 py-4">Stok</th>
                                            <th className="px-6 py-4 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {filteredProducts.map((product) => (
                                            <ProductTableRow 
                                                key={product.id} 
                                                product={product} 
                                                formatRupiah={formatRupiah} 
                                                onDelete={handleDeleteProduct} 
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </>
            )}

            {/* Category Modal */}
            {isCategoryModalOpen && (
                <CategoryManagerModal 
                    categories={categories} 
                    onClose={() => setIsCategoryModalOpen(false)} 
                />
            )}
        </div>
    );
}

Products.layout = (page) => <AppLayout>{page}</AppLayout>;
