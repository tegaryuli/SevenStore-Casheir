import { useState } from "react";
import { Head, useForm, router, usePage } from "@inertiajs/react";
import AppLayout from "@/layouts/App-Layout";
import SettingsLayout from "@/layouts/SettingsLayout";
import { Icon } from "@iconify/react";
import StandardContainer from "@/components/ui/StandardContainer";
import CustomDialog from "@/components/CustomDialog";

export default function UserManagement({ users, trashedUsers, roles }) {
    const { auth } = usePage().props;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [activeTab, setActiveTab] = useState("active");

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        roles: [],
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/settings/users", {
            onSuccess: () => {
                setIsModalOpen(false);
                reset();
            },
        });
    };

    const confirmDelete = (user) => {
        setUserToDelete(user);
        setIsDeleteDialogOpen(true);
    };

    const handleDelete = () => {
        if (userToDelete) {
            if (activeTab === "trash") {
                router.delete(`/settings/users/${userToDelete.id}/force`, {
                    onSuccess: () => {
                        setIsDeleteDialogOpen(false);
                        setUserToDelete(null);
                    },
                });
            } else {
                router.delete(`/settings/users/${userToDelete.id}`, {
                    onSuccess: () => {
                        setIsDeleteDialogOpen(false);
                        setUserToDelete(null);
                    },
                });
            }
        }
    };

    const handleRestore = (user) => {
        router.post(`/settings/users/${user.id}/restore`);
    };

    return (
        <div className="w-full h-full flex flex-col relative overflow-hidden">
            <Head title="Pengelolaan User" />
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <StandardContainer
                    header={
                        <div className="flex items-center justify-between w-full p-2">
                            <div className="flex flex-col">
                                <h1 className="font-inter font-medium text-[24px] text-blue-2">
                                    Pengelolaan User
                                </h1>
                                <p className="text-sm text-gray-500 font-medium">
                                    Kelola akun pengguna, admin, dan kasir di
                                    sistem.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className=" flex items-center gap-2 px-6 py-2 bg-blue text-white rounded-xl hover:bg-blue-9 transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue"
                            >
                                <Icon
                                    icon="ic:baseline-add"
                                    className="text-xl"
                                />
                                Tambah Akun
                            </button>
                        </div>
                    }
                    className="!border-none"
                >
                    <div className="px-8 pt-4 pb-2 border-b border-gray-100 flex gap-6 font-medium text-sm ">
                        <button
                            onClick={() => setActiveTab("active")}
                            className={`pb-2 px-1 transition-colors relative ${activeTab === "active" ? "text-blue-2" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            Akun Aktif
                            {activeTab === "active" && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue rounded-t-full"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab("trash")}
                            className={`pb-2 px-1 transition-colors relative ${activeTab === "trash" ? "text-red-500" : "text-gray-400 hover:text-gray-600"}`}
                        >
                            Tong Sampah
                            {activeTab === "trash" && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-t-full"></div>
                            )}
                        </button>
                    </div>

                    <div className="h-full overflow-y-auto ">
                        <div className="bg-white shadow-sm overflow-hidden font-inter">
                            <table className="w-full text-left text-sm text-blue-2">
                                <thead className="border-b border-gray-200 text-xs font-bold text-gray-600 uppercase">
                                    <tr>
                                        <th className="px-6 py-4">Nama</th>
                                        <th className="px-6 py-4">Email</th>
                                        <th className="px-6 py-4">Role</th>
                                        <th className="px-6 py-4">Terdaftar</th>
                                        <th className="px-6 py-4 text-center">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {activeTab === "active"
                                        ? users.map((u) => (
                                              <tr
                                                  key={u.id}
                                                  className="hover:bg-gray-50/50 transition-colors"
                                              >
                                                  <td className="px-6 py-4 font-medium">
                                                      {u.name}
                                                  </td>
                                                  <td className="px-6 py-4">
                                                      {u.email}
                                                  </td>
                                                  <td className="px-6 py-4">
                                                      <span
                                                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                              u.role.toLowerCase().includes("admin")
                                                                  ? "bg-purple-100 text-purple-700"
                                                                  : "bg-green-100 text-green-700"
                                                          }`}
                                                      >
                                                          {u.role}
                                                      </span>
                                                  </td>
                                                  <td className="px-6 py-4 text-gray-500">
                                                      {new Date(
                                                          u.created_at,
                                                      ).toLocaleDateString(
                                                          "id-ID",
                                                      )}
                                                  </td>
                                                  <td className="px-6 py-4 text-center">
                                                      <button
                                                          onClick={() =>
                                                              confirmDelete(u)
                                                          }
                                                          disabled={
                                                              auth.user.id ===
                                                              u.id
                                                          }
                                                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-30 disabled:hover:bg-transparent"
                                                          title={
                                                              auth.user.id ===
                                                              u.id
                                                                  ? "Tidak dapat menghapus diri sendiri"
                                                                  : "Hapus User"
                                                          }
                                                      >
                                                          <Icon
                                                              icon="ic:baseline-delete"
                                                              className="text-xl"
                                                          />
                                                      </button>
                                                  </td>
                                              </tr>
                                          ))
                                        : trashedUsers.map((u) => (
                                              <tr
                                                  key={u.id}
                                                  className="hover:bg-red-50/50 transition-colors"
                                              >
                                                  <td className="px-6 py-4 font-medium">
                                                      {u.name}
                                                  </td>
                                                  <td className="px-6 py-4 text-gray-500">
                                                      {u.email}
                                                  </td>
                                                  <td className="px-6 py-4">
                                                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                                                          {u.role}
                                                      </span>
                                                  </td>
                                                  <td className="px-6 py-4 text-gray-500">
                                                      {new Date(
                                                          u.deleted_at,
                                                      ).toLocaleDateString(
                                                          "id-ID",
                                                      )}
                                                  </td>
                                                  <td className="px-6 py-4 flex items-center justify-center gap-2">
                                                      <button
                                                          onClick={() =>
                                                              handleRestore(u)
                                                          }
                                                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                                          title="Pulihkan (Restore)"
                                                      >
                                                          <Icon
                                                              icon="ic:baseline-restore"
                                                              className="text-xl"
                                                          />
                                                      </button>
                                                      <button
                                                          onClick={() =>
                                                              confirmDelete(u)
                                                          }
                                                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                          title="Hapus Permanen"
                                                      >
                                                          <Icon
                                                              icon="ic:baseline-delete-forever"
                                                              className="text-xl"
                                                          />
                                                      </button>
                                                  </td>
                                              </tr>
                                          ))}
                                    {(activeTab === "active" &&
                                        users.length === 0) ||
                                    (activeTab === "trash" &&
                                        trashedUsers.length === 0) ? (
                                        <tr>
                                            <td
                                                colSpan="5"
                                                className="text-center py-8 text-gray-400"
                                            >
                                                Tidak ada data.
                                            </td>
                                        </tr>
                                    ) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </StandardContainer>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm font-inter">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-lg font-semibold text-blue-2">
                                Tambah Akun Baru
                            </h2>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    reset();
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
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

                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-1">
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                                    required
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-2">
                                    Roles
                                </label>
                                <div className="grid grid-cols-2 gap-2">
                                    {roles.map((r) => (
                                        <label key={r.id} className="flex items-center gap-2 cursor-pointer bg-gray-50 px-3 py-2 rounded-xl border border-gray-200">
                                            <input
                                                type="checkbox"
                                                value={r.name}
                                                checked={data.roles.includes(r.name)}
                                                onChange={(e) => {
                                                    const newRoles = e.target.checked 
                                                        ? [...data.roles, r.name]
                                                        : data.roles.filter(name => name !== r.name);
                                                    setData("roles", newRoles);
                                                }}
                                                className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-sm font-medium text-gray-700 capitalize">{r.name}</span>
                                        </label>
                                    ))}
                                </div>
                                {errors.roles && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.roles}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-2 mb-1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                                        required
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-blue-2 mb-1">
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
                                        className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        reset();
                                    }}
                                    className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="px-5 py-2 text-sm font-medium bg-blue text-white rounded-xl hover:bg-blue-9 transition-colors disabled:opacity-50"
                                >
                                    {processing
                                        ? "Menyimpan..."
                                        : "Simpan Akun"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <CustomDialog
                isOpen={isDeleteDialogOpen}
                type="confirm"
                title="Konfirmasi Hapus"
                message={`Apakah Anda yakin ingin menghapus ${activeTab === "trash" ? "secara permanen" : ""} akun ${userToDelete?.name}? ${activeTab === "trash" ? "Data akan hilang permanen." : "User akan dimasukkan ke tong sampah."}`}
                onConfirm={handleDelete}
                onClose={() => {
                    setIsDeleteDialogOpen(false);
                    setUserToDelete(null);
                }}
            />
        </div>
    );
}

UserManagement.layout = (page) => (
    <AppLayout>
        <SettingsLayout>{page}</SettingsLayout>
    </AppLayout>
);
