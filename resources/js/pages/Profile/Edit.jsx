import { useForm, usePage } from "@inertiajs/react";
import AppLayout from "@/pages/layouts/App-Layout";
import { useState, useRef } from "react";

export default function Edit() {
    const { auth, status } = usePage().props;
    const user = auth.user;

    const { data, setData, post, processing, errors } = useForm({
        name: user.name,
        password: "",
        password_confirmation: "",
        avatar: null,
    });

    const [previewUrl, setPreviewUrl] = useState(
        user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0b85ff&color=fff&bold=true`
    );
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("avatar", file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const submit = (e) => {
        e.preventDefault();
        // Inertia.js membutuhkan POST request ketika mengunggah file (meskipun secara logik adalah PUT)
        // Dengan melewatkan _method='put' di field, Laravel membacanya sebagai PUT request
        post("/profile", {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    return (
        <AppLayout>
            <div className="w-full max-w-2xl mx-auto py-8">
                <h1 className="font-inter font-medium text-[24px] text-blue-2 mb-8">
                    Pengaturan Akun
                </h1>

                {status === "profile-updated" && (
                    <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                        Profil berhasil diperbarui.
                    </div>
                )}

                <form onSubmit={submit} className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm font-inter">
                    {/* Profil Picture Upload */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group cursor-pointer" onClick={() => fileInputRef.current.click()}>
                            <img
                                src={previewUrl}
                                alt="Profile Avatar"
                                className="size-32 rounded-full object-cover border-4 border-white shadow-md transition-opacity group-hover:opacity-75"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-sm font-medium">Ubah Foto</span>
                            </div>
                        </div>
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        {errors.avatar && (
                            <p className="mt-2 text-sm text-red-500">{errors.avatar}</p>
                        )}
                        <p className="mt-3 text-sm text-gray-500 font-medium text-center">
                            Klik pada foto untuk mengganti avatar Anda
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-blue-2 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-blue-2"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-medium text-blue-2 mb-2">
                                Password Baru (Opsional)
                            </label>
                            <input
                                type="password"
                                value={data.password}
                                onChange={(e) => setData("password", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-blue-2"
                                placeholder="Biarkan kosong jika tidak ingin mengubah"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                            )}
                        </div>

                        {/* Password Confirmation */}
                        <div>
                            <label className="block text-sm font-medium text-blue-2 mb-2">
                                Konfirmasi Password
                            </label>
                            <input
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) => setData("password_confirmation", e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-blue-2"
                                placeholder="Ketik ulang password baru"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-8 py-3 bg-blue text-white font-medium rounded-xl hover:bg-blue-9 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue disabled:opacity-50"
                            >
                                {processing ? "Menyimpan..." : "Simpan Perubahan"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
