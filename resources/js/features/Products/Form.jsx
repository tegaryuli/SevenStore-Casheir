import { useState, useRef, useMemo, useCallback } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import AppLayout from "@/layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import NumberInputWithZeros from "@/components/NumberInputWithZeros";
import FormInput from "@/components/ui/FormInput";

import StandardContainer from "@/components/ui/StandardContainer";

export default function ProductForm({ categories, product }) {
    const isEdit = !!product;
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(
        product?.image_path || null,
    );

    const initialCategories = useMemo(() => {
        return isEdit ? product.categories.map((c) => c.id) : [];
    }, [isEdit, product]);

    const { data, setData, post, processing, errors } = useForm({
        name: product?.name || "",
        sku: product?.sku || "",
        price: product?.price || "",
        stock: product?.stock || "",
        categories: initialCategories,
        image: null,
        _method: isEdit ? "put" : "post",
    });

    const handleCategoryToggle = useCallback(
        (id) => {
            const currentCategories = Array.isArray(data.categories)
                ? data.categories
                : [];
            if (currentCategories.includes(id)) {
                setData(
                    "categories",
                    currentCategories.filter((catId) => catId !== id),
                );
            } else {
                setData("categories", [...currentCategories, id]);
            }
        },
        [data.categories, setData],
    );

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
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title={isEdit ? "Edit Produk" : "Tambah Produk Baru"} />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Produk", href: "/produk" },
                    { label: isEdit ? "Edit Produk" : "Tambah Produk" },
                ]}
            />
            <h1 className="text-3xl font-bold text-blue-2 mb-2">
                {isEdit ? "Edit Data Produk" : "Tambah Produk Baru"}
            </h1>
            <StandardContainer
                className="max-w-6xl"
                header={
                    <>
                        <div className="w-full flex gap-3 justify-end ">
                            <Link
                                href="/produk"
                                className="px-6 py-2 bg-low-white text-dark font-medium rounded-xl hover:bg-abbey-white transition-colors"
                            >
                                Batal
                            </Link>
                            <button
                                type="submit"
                                form="product-form"
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
                    </>
                }
            >
                <div className="h-fit">
                    <form
                        id="product-form"
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-6 px-6 md:pt-3 md:pb-1"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormInput
                                id="name"
                                label="Nama Produk"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required={true}
                                error={errors.name}
                            />
                            <FormInput
                                id="sku"
                                label="SKU / Barcode"
                                value={data.sku}
                                onChange={(e) =>
                                    setData(
                                        "sku",
                                        e.target.value.replace(/\s+/g, ""),
                                    )
                                }
                                placeholder={
                                    isEdit ? "" : "Otomatis dibuat oleh sistem"
                                }
                                error={errors.sku}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <div className="flex justify-between items-end mb-2">
                                    <label className="block text-sm font-medium text-dark">
                                        Harga (Rp){" "}
                                        <span className="text-vintage-rouge">
                                            *
                                        </span>
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
                                        Stok{" "}
                                        <span className="text-vintage-rouge">
                                            *
                                        </span>
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

                        <div className="border border-low-white p-5 rounded-xl bg-low-white">
                            <label className="block text-sm font-semibold text-blue-2 mb-3">
                                Kategori (Pilih minimal 1){" "}
                                <span className="text-vintage-rouge">*</span>
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-h-[170px] overflow-y-auto custom-scrollbar pr-2">
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
                        <div className="w-full flex flex-col md:flex-row gap-2 ">
                            <div className="flex-1 ">
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
                                    Kosongkan jika ingin produk mewarisi foto
                                    dari kategori pertamanya.
                                </p>
                                {errors.image && (
                                    <p className="text-xs text-vintage-rouge mt-1">
                                        {errors.image}
                                    </p>
                                )}
                            </div>
                            <div className="shrink-0">
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
                    </form>
                </div>
            </StandardContainer>
        </div>
    );
}

ProductForm.layout = (page) => <AppLayout>{page}</AppLayout>;
