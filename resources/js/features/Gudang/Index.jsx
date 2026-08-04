import { useState, useMemo } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import StandardContainer from "@/components/ui/StandardContainer";
import BaselineInventoryIcon from "@iconify-react/ic/baseline-inventory";
import CategoryManagerModal from "@/components/CategoryManagerModal";
import ProductHeaderControls from "@/features/Products/components/ProductHeaderControls";
import ProductEmptyState from "@/features/Products/components/ProductEmptyState";
import { GudangGridItem, GudangTableRow } from "@/components/GudangItem";
import { H1 } from "@/components/ui/CustomTag";

export default function Index({ products, categories = [] }) {
    const [viewMode, setViewMode] = useState("table");
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    
    const [selectedProduct, setSelectedProduct] = useState(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        product_id: "",
        qty: "",
    });

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                (product.sku || "").toLowerCase().includes(search.toLowerCase());

            const matchCategory =
                selectedCategory === "all" ||
                (product.categories || []).some(
                    (c) => c.id.toString() === selectedCategory,
                );

            return matchSearch && matchCategory;
        });
    }, [products, search, selectedCategory]);

    const openModal = (product) => {
        setSelectedProduct(product);
        setData({
            product_id: product.id,
            qty: 1,
        });
    };

    const closeModal = () => {
        setSelectedProduct(null);
        reset();
    };

    const handleTransfer = (e) => {
        e.preventDefault();
        post("/gudang/transfer", {
            onSuccess: () => closeModal(),
        });
    };

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Katalog Gudang" />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Gudang" },
                ]}
            />
            <H1 />

            <StandardContainer
                className="mt-2"
                header={
                        <ProductHeaderControls
                            search={search}
                            setSearch={setSearch}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            categories={categories}
                            viewMode={viewMode}
                            setViewMode={setViewMode}
                            setIsCategoryModalOpen={setIsCategoryModalOpen}
                            source="gudang"
                        />
                    }
                >
                {filteredProducts.length === 0 ? (
                    <ProductEmptyState />
                ) : (
                    <>
                        {viewMode === "grid" && (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4">
                                {filteredProducts.map((product) => (
                                    <GudangGridItem
                                        key={product.id}
                                        product={product}
                                        onOpenModal={openModal}
                                    />
                                ))}
                            </div>
                        )}
                        {viewMode === "table" && (
                            <div className="flex-1 overflow-x-auto">
                                <table className="w-full text-left text-sm text-blue-2 border-collapse">
                                    <thead className="bg-blue-1/10 border-b border-blue-2/10 text-xs font-bold text-blue-2">
                                        <tr>
                                            <th className="px-6 py-4">Nama Barang</th>
                                            <th className="px-6 py-4">SKU</th>
                                            <th className="px-6 py-4">Kategori</th>
                                            <th className="px-6 py-4">Stok Gudang</th>
                                            <th className="px-6 py-4">Stok Toko</th>
                                            <th className="px-6 py-4 text-right">Aksi</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-low-white">
                                        {filteredProducts.map((product) => (
                                            <GudangTableRow
                                                key={product.id}
                                                product={product}
                                                onOpenModal={openModal}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </>
                )}
            </StandardContainer>

            {/* Modal Buka Segel */}
            {selectedProduct && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-200">
                        <h2 className="text-xl font-bold text-blue-2 mb-1">Buka Segel Barang</h2>
                        <p className="text-sm text-dark opacity-70 mb-4">
                            Pindahkan stok dari gudang ke toko.
                        </p>

                        <div className="bg-low-white rounded-xl p-4 mb-4 flex items-center gap-3">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-low-white">
                                <BaselineInventoryIcon className="text-blue-2 w-6 h-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-blue-2">{selectedProduct.name}</p>
                                <p className="text-xs font-medium text-dark">
                                    Stok Gudang: <span className="text-vintage-rouge">{selectedProduct.warehouse_stock} {selectedProduct.warehouse_unit}</span>
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleTransfer}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-dark mb-2">
                                    Jumlah Segel ({selectedProduct.warehouse_unit || "Segel"})
                                </label>
                                <input
                                    type="number"
                                    min="1"
                                    max={selectedProduct.warehouse_stock}
                                    value={data.qty}
                                    onChange={(e) => setData("qty", e.target.value)}
                                    className="w-full border-low-white rounded-xl bg-white focus:ring-blue focus:border-blue"
                                    required
                                />
                                {errors.qty && <p className="text-xs text-vintage-rouge mt-1">{errors.qty}</p>}
                            </div>

                            <div className="mb-6 p-3 bg-blue/10 rounded-xl border border-blue/20">
                                <p className="text-sm font-medium text-blue-2 text-center">
                                    Akan menambah stok toko sebanyak:<br/>
                                    <span className="text-xl font-bold">
                                        {data.qty ? data.qty * (selectedProduct.conversion_rate || 1) : 0} {selectedProduct.store_unit || "Pcs"}
                                    </span>
                                </p>
                            </div>

                            <div className="flex gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="px-4 py-2 bg-low-white text-dark font-medium rounded-xl hover:bg-abbey-white transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing || !data.qty}
                                    className="px-6 py-2 bg-blue-2 text-white font-medium rounded-xl hover:opacity-90 transition-colors disabled:opacity-70"
                                >
                                    {processing ? "Memproses..." : "Konfirmasi Buka"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {isCategoryModalOpen && (
                <CategoryManagerModal
                    categories={categories}
                    onClose={() => setIsCategoryModalOpen(false)}
                />
            )}
        </div>
    );
}
