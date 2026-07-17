import { useState, useRef } from "react";
import { useForm, router } from "@inertiajs/react";
import CustomDialog from "@/components/CustomDialog";

export default function CategoryManagerModal({ categories, onClose }) {
    const [editingId, setEditingId] = useState(null);
    const fileInputRef = useRef(null);

    const [dialogConfig, setDialogConfig] = useState({ isOpen: false, title: "", message: "", type: "alert", onConfirm: null });
    const showConfirm = (title, message, onConfirm) => setDialogConfig({ isOpen: true, title, message, type: "confirm", onConfirm });
    const closeDialog = () => setDialogConfig({ ...dialogConfig, isOpen: false });

    // Form for Create/Edit
    const { data, setData, post, processing, errors, reset, clearErrors } =
        useForm({
            name: "",
            image: null,
            _method: "post", // Using post spoofing for edits with files
        });

    const handleEdit = (category) => {
        setEditingId(category.id);
        setData({
            name: category.name,
            image: null,
            _method: "put",
        });
        clearErrors();
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        reset();
        clearErrors();
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            post(`/kategori/${editingId}`, {
                forceFormData: true,
                onSuccess: () => {
                    handleCancelEdit();
                },
                preserveScroll: true,
            });
        } else {
            post("/kategori", {
                forceFormData: true,
                onSuccess: () => {
                    reset();
                    if (fileInputRef.current) fileInputRef.current.value = "";
                },
                preserveScroll: true,
            });
        }
    };

    const handleDelete = (id, name) => {
        showConfirm(
            "Konfirmasi Hapus",
            `Apakah Anda yakin ingin menghapus kategori "${name}"? \n\nSemua relasi produk ke kategori ini akan terhapus. Jika ada produk yang HANYA memiliki kategori ini, produk tersebut juga akan TERHAPUS permanen!`,
            () => {
                router.delete(`/kategori/${id}`, {
                    preserveScroll: true,
                });
            }
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 font-inter">
            <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-bold text-blue-2">
                        Kelola Kategori
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
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
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    {/* Add / Edit Form */}
                    <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-5 mb-8">
                        <h3 className="text-sm font-semibold text-blue-2 mb-4">
                            {editingId
                                ? "Edit Kategori"
                                : "Tambah Kategori Baru"}
                        </h3>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Nama Kategori
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue text-sm"
                                        placeholder="Misal: Minuman Dingin"
                                        required
                                    />
                                    {errors.name && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-700 mb-1">
                                        Foto Kategori{" "}
                                        {editingId ? "(Opsional)" : "(Wajib)"}
                                    </label>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        accept="image/*"
                                        onChange={(e) =>
                                            setData("image", e.target.files[0])
                                        }
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue hover:file:bg-blue-100"
                                        required={!editingId}
                                    />
                                    {errors.image && (
                                        <p className="text-xs text-red-500 mt-1">
                                            {errors.image}
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-end gap-2 mt-2">
                                {editingId && (
                                    <button
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200"
                                    >
                                        Batal
                                    </button>
                                )}
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue rounded-lg hover:bg-blue-9 disabled:opacity-70 flex items-center"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : editingId
                                          ? "Simpan Perubahan"
                                          : "Tambahkan Kategori"}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* List of Categories */}
                    <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">
                        Daftar Kategori Saat Ini
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {categories.map((category) => (
                            <div
                                key={category.id}
                                className="flex items-center p-3 border border-gray-100 rounded-xl bg-white hover:border-blue-100 hover:shadow-sm transition-all group"
                            >
                                <img
                                    src={
                                        category.image_path ||
                                        "https://placehold.co/100x100/eeeeee/999999?text=No+Img"
                                    }
                                    alt={category.name}
                                    className="w-12 h-12 rounded-lg object-cover bg-gray-50 mr-3"
                                />
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-blue-2 truncate">
                                        {category.name}
                                    </h4>
                                    <p className="text-xs text-gray-400">
                                        ID: {category.id}
                                    </p>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => handleEdit(category)}
                                        className="p-1.5 text-blue hover:bg-blue-50 rounded-md"
                                        title="Edit"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() =>
                                            handleDelete(
                                                category.id,
                                                category.name,
                                            )
                                        }
                                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-md"
                                        title="Hapus"
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                        {categories.length === 0 && (
                            <p className="text-sm text-gray-500 italic col-span-2 text-center py-4">
                                Belum ada kategori.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* Custom Dialog */}
            <CustomDialog 
                {...dialogConfig} 
                onClose={closeDialog} 
            />
        </div>
    );
}
