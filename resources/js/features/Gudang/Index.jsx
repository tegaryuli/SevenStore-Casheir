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
import TransferModal from "./Components/TransferModal";

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
                (product.sku || "")
                    .toLowerCase()
                    .includes(search.toLowerCase());

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
                                            <th className="px-6 py-4">
                                                Nama Barang
                                            </th>
                                            <th className="px-6 py-4">SKU</th>
                                            <th className="px-6 py-4">
                                                Kategori
                                            </th>
                                            <th className="px-6 py-4">
                                                Stok Gudang
                                            </th>
                                            <th className="px-6 py-4">
                                                Stok Toko
                                            </th>
                                            <th className="px-6 py-4 text-right">
                                                Aksi
                                            </th>
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

            <TransferModal
                selectedProduct={selectedProduct}
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                handleTransfer={handleTransfer}
                closeModal={closeModal}
            />

            {isCategoryModalOpen && (
                <CategoryManagerModal
                    categories={categories}
                    onClose={() => setIsCategoryModalOpen(false)}
                />
            )}
        </div>
    );
}
