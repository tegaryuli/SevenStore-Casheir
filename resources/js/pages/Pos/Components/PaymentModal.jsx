import { useState, useEffect } from "react";

export default function PaymentModal({ total, formatRupiah, onClose, onSubmit }) {
    const [cashGiven, setCashGiven] = useState("");
    const [quickAmounts, setQuickAmounts] = useState([]);

    // Calculate quick amounts based on total
    useEffect(() => {
        const amounts = [];
        
        // Always exact amount first
        amounts.push(total);

        // Next logical bills
        const rounded10k = Math.ceil(total / 10000) * 10000;
        const rounded50k = Math.ceil(total / 50000) * 50000;
        const rounded100k = Math.ceil(total / 100000) * 100000;

        if (rounded10k > total && rounded10k !== amounts[amounts.length - 1]) amounts.push(rounded10k);
        if (rounded50k > total && rounded50k !== amounts[amounts.length - 1]) amounts.push(rounded50k);
        if (rounded100k > total && rounded100k !== amounts[amounts.length - 1]) amounts.push(rounded100k);
        if (rounded100k + 50000 > total && !amounts.includes(rounded100k + 50000)) amounts.push(rounded100k + 50000);

        setQuickAmounts(amounts.slice(0, 4));
        setCashGiven(total.toString()); // Default to exact amount
    }, [total]);

    const cashValue = parseInt(cashGiven.replace(/\D/g, "")) || 0;
    const change = Math.max(0, cashValue - total);
    const isEnough = cashValue >= total;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEnough) {
            onSubmit(cashValue);
        }
    };

    return (
        <div className="fixed inset-0 bg-dark/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                <div className="p-5 border-b border-low-white flex justify-between items-center bg-blue-2 text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        Pembayaran (Tunai)
                    </h2>
                    <button onClick={onClose} className="p-1 hover:bg-white/20 rounded-lg transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div className="p-6">
                    <div className="text-center mb-6">
                        <p className="text-dark opacity-60 text-sm font-medium mb-1">Total Tagihan</p>
                        <h3 className="text-3xl font-bold text-blue-2">{formatRupiah(total)}</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-dark mb-2">Uang Diterima (Tunai)</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <span className="text-dark font-medium">Rp</span>
                                </div>
                                <input
                                    type="text"
                                    value={cashValue === 0 && cashGiven === "" ? "" : cashValue.toLocaleString('id-ID')}
                                    onChange={(e) => setCashGiven(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 text-lg font-bold border-2 border-low-white rounded-xl focus:outline-none focus:border-blue-2 transition"
                                    autoFocus
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-2">
                            {quickAmounts.map((amt, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setCashGiven(amt.toString())}
                                    className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition ${cashValue === amt ? 'bg-blue-2 text-white border-blue-2' : 'bg-white text-dark border-low-white hover:border-blue-2'}`}
                                >
                                    {idx === 0 ? "Uang Pas" : formatRupiah(amt)}
                                </button>
                            ))}
                        </div>

                        <div className={`p-4 rounded-xl border ${isEnough ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                            <p className={`text-sm font-semibold mb-1 ${isEnough ? 'text-green-700' : 'text-red-600'}`}>
                                {isEnough ? 'Kembalian:' : 'Kurang:'}
                            </p>
                            <h4 className={`text-2xl font-bold ${isEnough ? 'text-green-700' : 'text-red-600'}`}>
                                {isEnough ? formatRupiah(change) : formatRupiah(total - cashValue)}
                            </h4>
                        </div>

                        <button 
                            type="submit"
                            disabled={!isEnough}
                            className="w-full mt-2 py-3 bg-blue-2 text-white font-bold text-lg rounded-xl shadow-md hover:bg-blue-9 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Selesaikan Transaksi
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
