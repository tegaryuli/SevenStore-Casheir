import { useRef } from "react";

export default function ReceiptModal({ receipt, formatRupiah, onClose }) {
    const receiptRef = useRef();

    const handlePrint = () => {
        const printContent = receiptRef.current.innerHTML;
        const originalContent = document.body.innerHTML;

        document.body.innerHTML = `
            <div style="width: 300px; padding: 20px; font-family: monospace;">
                ${printContent}
            </div>
        `;
        
        window.print();
        
        // Restore
        document.body.innerHTML = originalContent;
        window.location.reload(); // Quickest way to restore react state after messing with DOM
    };

    if (!receipt) return null;

    return (
        <div className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-sm shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="p-4 bg-green-500 text-white text-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-xl font-bold">Transaksi Sukses!</h2>
                    <p className="text-sm opacity-90">{receipt.invoice_number}</p>
                </div>

                {/* Printable Area */}
                <div className="p-6 bg-[#f9f9f9] relative">
                    {/* Jagged edge effect (CSS trick) */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-repeat-x" style={{backgroundImage: 'radial-gradient(circle at 50% 0, transparent 4px, #f9f9f9 5px)', backgroundSize: '10px 10px'}}></div>
                    
                    <div ref={receiptRef} className="text-sm font-mono text-dark">
                        <div className="text-center mb-4">
                            <h3 className="font-bold text-lg">CASHIER TOKO7</h3>
                            <p className="text-xs opacity-70">Jalan Kenangan No. 7, Jakarta</p>
                            <p className="text-xs opacity-70">Telp: 0812-3456-7890</p>
                        </div>
                        
                        <div className="border-t border-b border-dashed border-dark/30 py-2 mb-3">
                            <div className="flex justify-between text-xs">
                                <span>No: {receipt.invoice_number}</span>
                                <span>{new Date(receipt.created_at).toLocaleDateString('id-ID')}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                                <span>Kasir: {receipt.user?.name || 'Admin'}</span>
                                <span>{new Date(receipt.created_at).toLocaleTimeString('id-ID')}</span>
                            </div>
                        </div>

                        <div className="mb-3 flex flex-col gap-2">
                            {receipt.items.map(item => (
                                <div key={item.id} className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <div className="font-semibold">{item.product_name}</div>
                                        <div className="text-xs opacity-70">{item.quantity} x {formatRupiah(item.price)}</div>
                                    </div>
                                    <div className="font-semibold">{formatRupiah(item.subtotal)}</div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-dashed border-dark/30 pt-2 flex flex-col gap-1">
                            <div className="flex justify-between font-bold text-base">
                                <span>Total:</span>
                                <span>{formatRupiah(receipt.total_amount)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tunai:</span>
                                <span>{formatRupiah(receipt.cash_given)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Kembali:</span>
                                <span>{formatRupiah(receipt.change_amount)}</span>
                            </div>
                        </div>
                        
                        <div className="text-center mt-6 text-xs opacity-70">
                            Terima kasih atas kunjungan Anda!
                        </div>
                    </div>
                </div>

                <div className="p-4 flex gap-3 bg-white">
                    <button onClick={onClose} className="flex-1 py-2 bg-low-white text-dark font-medium rounded-xl hover:bg-gray-200 transition">
                        Tutup
                    </button>
                    <button onClick={handlePrint} className="flex-1 py-2 bg-blue-2 text-white font-bold rounded-xl shadow-md hover:bg-blue-9 transition flex justify-center items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                        Cetak Struk
                    </button>
                </div>
            </div>
        </div>
    );
}
