import { useState, useRef } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AppLayout from "../layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import NumberInputWithZeros from "@/components/NumberInputWithZeros";

export default function ProductForm({ categories, product }) {
    const isEdit = !!product;
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(
        product?.image_path || null,
    );

    // Prepare initial categories
    const initialCategories = isEdit ? product.categories.map((c) => c.id) : [];

    const { data, setData, post, processing, errors } = useForm({
        name: product?.name || "",
        sku: product?.sku || "",
        price: product?.price || "",
        stock: product?.stock || "",
        categories: initialCategories,
        image: null,
        _method: isEdit ? "put" : "post",
    });

    const handleCategoryToggle = (id) => {
        let newCategories = [...data.categories];
        if (newCategories.includes(id)) {
            newCategories = newCategories.filter((catId) => catId !== id);
        } else {
            newCategories.push(id);
        }
        setData("categories", newCategories);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData("image", file);
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(product?.image_path || null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEdit ? `/produk/${product.id}` : "/produk";
        post(url);
    };

    return (
        <div className="w-full h-full text-blue-2 font-inter">
            <Head title={isEdit ? "Edit Produk" : "Tambah Produk Baru"} />

            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Produk", href: "/produk" },
                    { label: isEdit ? "Edit Produk" : "Tambah Produk" },
                ]}
            />

            <div className="bg-white rounded-2xl p-8 max-w-4xl mt-6">
                <h2 className="text-2xl font-bold text-blue-2 mb-6 tracking-tight">
                    {isEdit ? "Edit Data Produk" : "Tambah Produk Baru"}
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-dark mb-2">
                                Nama Produk{" "}
                                <span className="text-vintage-rouge">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2"
                                required
                            />
                            {errors.name && (
                                <p className="text-xs text-vintage-rouge mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-dark mb-2">
                                SKU / Barcode
                                {!isEdit && (
                                    <span className="text-dark opacity-50 font-normal text-xs ml-2">
                                        (Kosongkan untuk Auto-Generate)
                                    </span>
                                )}
                            </label>
                            <input
                                type="text"
                                value={data.sku}
                                onChange={(e) => setData("sku", e.target.value)}
                                className="w-full px-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 font-mono"
                                placeholder={
                                    isEdit ? "" : "Otomatis dibuat oleh sistem"
                                }
                            />
                            {errors.sku && (
                                <p className="text-xs text-vintage-rouge mt-1">
                                    {errors.sku}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <label className="block text-sm font-medium text-dark">
                                    Harga (Rp){" "}
                                    <span className="text-vintage-rouge">*</span>
                                </label>
                            </div>
                            <NumberInputWithZeros 
                                initialValue={product?.price} 
                                onChange={(val) => setData("price", val)} 
                                required={true} 
                            />
                            {errors.price && (
                                <p className="text-xs text-vintage-rouge mt-1">
                                    {errors.price}
                                </p>
                            )}
                        </div>
                        <div>
                            <div className="flex justify-between items-end mb-2">
                                <label className="block text-sm font-medium text-dark">
                                    Stok <span className="text-vintage-rouge">*</span>
                                </label>
                            </div>
                            <NumberInputWithZeros 
                                initialValue={product?.stock} 
                                onChange={(val) => setData("stock", val)} 
                                required={true} 
                            />
                            {errors.stock && (
                                <p className="text-xs text-vintage-rouge mt-1">
                                    {errors.stock}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Multi-Select Categories using Checkboxes */}
                    <div className="border border-low-white p-5 rounded-xl bg-low-white">
                        <label className="block text-sm font-semibold text-blue-2 mb-3">
                            Kategori (Pilih minimal 1){" "}
                            <span className="text-vintage-rouge">*</span>
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {categories.map((cat) => (
                                <label
                                    key={cat.id}
                                    className="flex items-center p-3 bg-white border border-low-white rounded-lg cursor-pointer hover:border-blue-2 transition-colors"
                                >
                                    <input
                                        type="checkbox"
                                        checked={data.categories.includes(
                                            cat.id,
                                        )}
                                        onChange={() =>
                                            handleCategoryToggle(cat.id)
                                        }
                                        className="w-4 h-4 text-blue border-low-white rounded focus:ring-blue-2"
                                    />
                                    <span className="ml-2 text-sm text-dark font-medium truncate">
                                        {cat.name}
                                    </span>
                                </label>
                            ))}
                        </div>
                        {errors.categories && (
                            <p className="text-xs text-vintage-rouge mt-2">
                                {errors.categories}
                            </p>
                        )}
                    </div>

                    {/* Image Upload */}
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-dark mb-2">
                                Foto Produk (Opsional)
                            </label>
                            <input
                                type="file"
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full text-sm text-dark opacity-80 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-logo-bg file:text-blue-2 hover:file:opacity-90"
                            />
                            <p className="text-xs text-dark opacity-50 mt-2">
                                Kosongkan jika ingin produk mewarisi foto dari
                                kategori pertamanya.
                            </p>
                            {errors.image && (
                                <p className="text-xs text-vintage-rouge mt-1">
                                    {errors.image}
                                </p>
                            )}
                        </div>
                        <div className="shrink-0">
                            <p className="text-xs font-medium text-dark opacity-80 mb-2">
                                Preview:
                            </p>
                            <div className="w-32 h-32 bg-low-white rounded-xl overflow-hidden border border-low-white flex items-center justify-center">
                                {imagePreview ? (
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-xs text-dark opacity-50">
                                        Tidak ada gambar
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Submit Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-low-white">
                        <Link
                            href="/produk"
                            className="px-6 py-2 bg-low-white text-dark font-medium rounded-xl hover:bg-abbey-white transition-colors"
                        >
                            Batal
                        </Link>
                        <button
                            type="submit"
                            disabled={processing}
                            className="px-6 py-2 bg-blue-2 text-white font-medium rounded-xl hover:opacity-90 transition-colors disabled:opacity-70"
                        >
                            {processing
                                ? "Menyimpan..."
                                : isEdit
                                  ? "Simpan Perubahan"
                                  : "Buat Produk"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

ProductForm.layout = (page) => <AppLayout>{page}</AppLayout>;
