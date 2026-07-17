import CartItem from "@/components/CartItem";

export default function PosCartSidebar({
    cart,
    cartTotal,
    isCartOpenMobile,
    setIsCartOpenMobile,
    clearCart,
    updateQuantity,
    removeFromCart,
    formatRupiah,
    setIsPaymentModalOpen,
}) {
    return (
        <div
            className={`
            absolute md:relative right-0 top-0 h-full w-full md:w-80 lg:w-96 
            bg-white md:rounded-2xl border border-low-white shadow-xl md:shadow-sm
            flex-col z-40
            ${isCartOpenMobile ? "flex" : "hidden md:flex"}
        `}
        >
            <div className="p-4 border-b border-low-white flex justify-between items-center bg-blue-2 text-white md:rounded-t-2xl">
                <h2 className="font-bold text-lg flex items-center gap-2">
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
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                    </svg>
                    Pesanan Aktif
                </h2>
                {cart.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-xs font-semibold bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition"
                    >
                        Kosongkan
                    </button>
                )}
                <button
                    onClick={() => setIsCartOpenMobile(false)}
                    className="md:hidden p-1"
                >
                    <svg
                        className="w-6 h-6"
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

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
                {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center opacity-40 text-center">
                        <svg
                            className="w-16 h-16 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            ></path>
                        </svg>
                        <p className="text-sm">
                            Keranjang kosong.
                            <br />
                            Tap produk untuk menambah.
                        </p>
                    </div>
                ) : (
                    cart.map((item) => (
                        <CartItem
                            key={item.product.id}
                            item={item}
                            formatRupiah={formatRupiah}
                            onUpdate={updateQuantity}
                            onRemove={removeFromCart}
                        />
                    ))
                )}
            </div>

            <div className="p-4 border-t border-low-white bg-gray-50 md:rounded-b-2xl">
                <div className="flex justify-between items-center mb-4">
                    <span className="font-semibold text-dark">
                        Total
                    </span>
                    <span className="font-bold text-2xl text-blue-2">
                        {formatRupiah(cartTotal)}
                    </span>
                </div>
                <button
                    onClick={() => setIsPaymentModalOpen(true)}
                    disabled={cart.length === 0}
                    className="w-full py-3.5 bg-blue-2 text-white font-bold rounded-xl shadow-lg hover:bg-blue-9 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    Bayar Sekarang
                    <span className="text-xs font-normal opacity-70 border border-white/30 px-2 py-0.5 rounded-md ml-1">
                        Ctrl+Enter
                    </span>
                </button>
            </div>
        </div>
    );
}
