import React from 'react';
import BaselineInventoryIcon from "@iconify-react/ic/baseline-inventory";

export default function TransferModal({
    selectedProduct,
    data,
    setData,
    errors,
    processing,
    handleTransfer,
    closeModal,
}) {
    if (!selectedProduct) return null;

    return (
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
    );
}
