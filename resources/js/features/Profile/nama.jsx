import { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import AppLayout from "@/layouts/App-Layout";
import SettingsLayout from "@/layouts/SettingsLayout";
import BaselineAddIcon from "@iconify-react/ic/baseline-add";
import CustomDialog from "@/components/CustomDialog";

export default function UserManagement({ users, roles }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role_id: "",
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

    return (
        <div className="w-full">
            <Head title="Pengelolaan User" />
            
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h1 className="font-inter font-medium text-[24px] text-blue-2">
                        Pengelolaan User
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Kelola akun pengguna, admin, dan kasir di sistem.
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue text-white rounded-xl hover:bg-blue-9 transition-colors text-sm font-medium shadow-sm"
                >
                    <BaselineAddIcon className="text-xl" />
                    Tambah Akun
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden font-inter">
                <table className="w-full text-left text-sm text-blue-2">
                    <thead className="bg-blue/5 border-b border-gray-200 text-xs font-bold text-gray-600 uppercase">
                        <tr>
                            <th className="px-6 py-4">Nama</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4">Terdaftar</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {users.map((u) => (
                            <tr key={u.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-medium">{u.name}</td>
                                <td className="px-6 py-4">{u.email}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                        u.role.toLowerCase() === 'admin' 
                                            ? 'bg-purple-100 text-purple-700' 
                                            : 'bg-green-100 text-green-700'
                                    }`}>
                                        {u.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500">{new Date(u.created_at).toLocaleDateString('id-ID')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm font-inter">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <h2 className="text-lg font-semibold text-blue-2">Tambah Akun Baru</h2>
                            <button onClick={() => { setIsModalOpen(false); reset(); }} className="text-gray-400 hover:text-gray-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-1">Nama Lengkap</label>
                                <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent" required />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-1">Email</label>
                                <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent" required />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-blue-2 mb-1">Role</label>
                                <select value={data.role_id} onChange={e => setData('role_id', e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent bg-white" required>
                                    <option value="">Pilih Role...</option>
                                    {roles.map(r => (
                                        <option key={r.id} value={r.id}>{r.name}</option>
                                    ))}
                                </select>
                                {errors.role_id && <p className="text-red-500 text-xs mt-1">{errors.role_id}</p>}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-blue-2 mb-1">Password</label>
                                    <input type="password" value={data.password} onChange={e => setData('password', e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent" required />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-blue-2 mb-1">Konfirmasi Password</label>
                                    <input type="password" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent" required />
                                </div>
                            </div>
                            
                            <div className="pt-4 mt-6 border-t border-gray-100 flex justify-end gap-3">
                                <button type="button" onClick={() => { setIsModalOpen(false); reset(); }} className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                                    Batal
                                </button>
                                <button type="submit" disabled={processing} className="px-5 py-2 text-sm font-medium bg-blue text-white rounded-xl hover:bg-blue-9 transition-colors disabled:opacity-50">
                                    {processing ? 'Menyimpan...' : 'Simpan Akun'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

UserManagement.layout = (page) => <AppLayout><SettingsLayout>{page}</SettingsLayout></AppLayout>;
