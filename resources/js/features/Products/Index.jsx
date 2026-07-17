import { useState, useMemo, useCallback } from "react";
import { Head, Link, router } from "@inertiajs/react";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryManagerModal from "@/components/CategoryManagerModal";
import { ProductGridItem, ProductTableRow } from "@/components/ProductItem";
import CustomDialog from "@/components/CustomDialog";
import SelectInput from "@/components/ui/SelectInput";
import StandardContainer from "@/components/ui/StandardContainer";
import { H1 } from "@/components/ui/CustomTag";
import ProductHeaderControls from "./components/ProductHeaderControls";
import ProductEmptyState from "./components/ProductEmptyState";

const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(number);
};

export default function Products({ products, categories }) {
    const [viewMode, setViewMode] = useState("table");
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [dialogConfig, setDialogConfig] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "alert",
        onConfirm: null,
    });

    const showConfirm = useCallback((title, message, onConfirm) => {
        setDialogConfig({
            isOpen: true,
            title,
            message,
            type: "confirm",
            onConfirm,
        });
    }, []);

    const closeDialog = useCallback(() => {
        setDialogConfig((prev) => ({ ...prev, isOpen: false }));
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.sku.toLowerCase().includes(search.toLowerCase());

            const matchCategory =
                selectedCategory === "all" ||
                product.categories.some(
                    (c) => c.id.toString() === selectedCategory,
                );

            return matchSearch && matchCategory;
        });
    }, [products, search, selectedCategory]);

    const handleDeleteProduct = useCallback(
        (id, name) => {
            showConfirm(
                "Konfirmasi Hapus",
                `Apakah Anda yakin ingin menghapus produk "${name}"? Tindakan ini tidak dapat dibatalkan!`,
                () => {
                    router.delete(`/produk/${id}`, { preserveScroll: true });
                },
            );
        },
        [showConfirm],
    );

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title="Katalog Produk" />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Produk" },
                ]}
            />
            <H1 />
            <StandardContainer
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
                            <div className="flex-1 overflow-x-auto">
                                <table className="w-full text-left text-sm text-blue-2">
                                    <thead className="bg-blue-1/10 border-b border-blue-2/10 text-xs font-bold text-blue-2">
                                        <tr>
                                            <th className="px-6 py-4">
                                                Produk
                                            </th>
                                            <th className="px-6 py-4">SKU</th>
                                            <th className="px-6 py-4">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-4">Harga</th>
                                            <th className="px-6 py-4">Stok</th>
                                            <th className="px-6 py-4 text-right">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-low-white">
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
                        )}
                    </>
                )}
            </StandardContainer>

            {isCategoryModalOpen && (
                <CategoryManagerModal
                    categories={categories}
                    onClose={() => setIsCategoryModalOpen(false)}
                />
            )}
            <CustomDialog {...dialogConfig} onClose={closeDialog} />
        </div>
    );
}
