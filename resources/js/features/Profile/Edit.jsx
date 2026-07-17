import { useForm, usePage, Head } from "@inertiajs/react";
import AppLayout from "@/layouts/App-Layout";
import SettingsLayout from "@/layouts/SettingsLayout";
import { useState, useRef } from "react";
import StandardContainer from "@/components/ui/StandardContainer";

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
        user.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=0b85ff&color=fff&bold=true`,
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
        post("/settings/profile", {
            preserveScroll: true,
            forceFormData: true,
        });
    };

    const headerContent = (
        <div className="flex items-center gap-6 p-2">
            <div
                className="relative group cursor-pointer"
                onClick={() => fileInputRef.current.click()}
            >
                <img
                    src={previewUrl}
                    alt="Profile Avatar"
                    className="size-20 rounded-full object-cover border-4 border-white shadow-md transition-opacity group-hover:opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-medium">
                        Ubah Foto
                    </span>
                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />

            <div className="flex flex-col">
                <h1 className="font-inter font-medium text-[24px] text-blue-2">
                    Pengaturan Akun
                </h1>
                <p className="text-sm text-gray-500 font-medium">
                    Klik pada foto untuk mengganti avatar Anda
                </p>
                {errors.avatar && (
                    <p className="mt-1 text-sm text-red-500">{errors.avatar}</p>
                )}
            </div>
        </div>
    );

    return (
        <div className="w-full h-full flex flex-col relative overflow-hidden">
            <Head title="Pengaturan Profil" />

            {status === "profile-updated" && (
                <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200">
                    Profil berhasil diperbarui.
                </div>
            )}

            <form
                onSubmit={submit}
                className="flex-1 flex flex-col h-full overflow-hidden"
            >
                <StandardContainer
                    header={headerContent}
                    className="!border-none"
                >
                    <div className="p-8 space-y-6 max-w-2xl">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-medium text-blue-2 mb-2">
                                Nama Lengkap
                            </label>
                            <input
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-blue-2"
                            />
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name}
                                </p>
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
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-blue-2"
                                placeholder="Biarkan kosong jika tidak ingin mengubah"
                            />
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password}
                                </p>
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
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
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
                                {processing
                                    ? "Menyimpan..."
                                    : "Simpan Perubahan"}
                            </button>
                        </div>
                    </div>
                </StandardContainer>
            </form>
        </div>
    );
}

Edit.layout = (page) => (
    <AppLayout>
        <SettingsLayout>{page}</SettingsLayout>
    </AppLayout>
);
