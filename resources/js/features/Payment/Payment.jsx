import { Head } from "@inertiajs/react";
import AppLayout from "../../layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import SelectInput from "@/components/ui/SelectInput";
import PaymentModal from "@/components/PaymentModal";
import ReceiptModal from "@/components/ReceiptModal";
import CustomDialog from "@/components/CustomDialog";
import { usePosPage } from "@/hooks/usePosPage";
import PosCartSidebar from "@/features/Payment/components/PosCartSidebar";
import PosProductCard from "@/features/Payment/components/PosProductCard";
import SearchInput from "@/components/ui/SearchInput";
import StandardContainer from "@/components/ui/StandardContainer";
import { H1 } from "@/components/ui/CustomTag";

export default function PosIndex(props) {
    const {
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
        isPaymentModalOpen,
        setIsPaymentModalOpen,
        isReceiptModalOpen,
        setIsReceiptModalOpen,
        isCartOpenMobile,
        setIsCartOpenMobile,
        dialogConfig,
        closeDialog,
        toasts,
        searchInputRef,
        formatRupiah,
        cart,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        filteredProducts,
        handleSearchKeyDown,
        flash,
        categorySelectProps,
        searchInputProps,
        handleCheckoutSubmit,
    } = usePosPage(props);

    const PageName = "Payment";

    return (
        <div className="w-full h-full text-blue-2 font-inter flex flex-col relative overflow-hidden">
            <Head title={PageName} />
            <Breadcrumb
                items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Kasir (POS)" },
                ]}
            />

            <H1 />
            <StandardContainer
                header={
                    <>
                        <SearchInput
                            ref={searchInputRef}
                            {...searchInputProps}
                        />
                        <SelectInput {...categorySelectProps} />
                    </>
                }
                rightSidebar={
                    <PosCartSidebar
                        cart={cart}
                        cartTotal={cartTotal}
                        isCartOpenMobile={isCartOpenMobile}
                        setIsCartOpenMobile={setIsCartOpenMobile}
                        clearCart={clearCart}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        formatRupiah={formatRupiah}
                        setIsPaymentModalOpen={setIsPaymentModalOpen}
                    />
                }
            >
                {filteredProducts.length === 0 ? (
                    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                        <svg
                            className="w-12 h-12 text-blue-2/30 mb-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                            ></path>
                        </svg>
                        <span className="text-sm font-bold text-blue-2">
                            {search.trim() === "" && selectedCategory === "all"
                                ? "Tekan ( / ) untuk cari manual atau scan barcode..."
                                : "Tidak ada produk ditemukan"}
                        </span>
                        <span className="text-xs text-blue-2/60 mt-1">
                            {search.trim() === "" && selectedCategory === "all"
                                ? "Daftar produk akan muncul saat Anda mulai mengetik atau men-scan."
                                : "Coba sesuaikan kata kunci atau filter kategori Anda."}
                        </span>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 p-2 pb-20">
                        {filteredProducts.map((product, idx) => (
                            <div
                                key={product.id}
                                id={`pos-product-${idx}`}
                                tabIndex={0}
                                onClick={() => addToCart(product)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault();
                                        addToCart(product);
                                    }
                                }}
                                className="cursor-pointer focus:outline-none focus:ring-4 focus:ring-orange-400 rounded-xl transition-all"
                            >
                                <PosProductCard
                                    product={product}
                                    formatRupiah={formatRupiah}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </StandardContainer>

            {!isCartOpenMobile && (
                <button
                    onClick={() => setIsCartOpenMobile(true)}
                    className="md:hidden absolute bottom-6 right-6 w-14 h-14 bg-blue-2 text-white rounded-full shadow-2xl flex items-center justify-center z-30"
                >
                    <div className="relative">
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
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                        </svg>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cart.reduce(
                                    (sum, item) => sum + item.quantity,
                                    0,
                                )}
                            </span>
                        )}
                    </div>
                </button>
            )}

            {isPaymentModalOpen && (
                <PaymentModal
                    total={cartTotal}
                    formatRupiah={formatRupiah}
                    onClose={() => setIsPaymentModalOpen(false)}
                    onSubmit={handleCheckoutSubmit}
                />
            )}

            {isReceiptModalOpen && flash?.receipt && (
                <ReceiptModal
                    receipt={flash.receipt}
                    formatRupiah={formatRupiah}
                    onClose={() => setIsReceiptModalOpen(false)}
                />
            )}

            <CustomDialog {...dialogConfig} onClose={closeDialog} />

            <div className="fixed top-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className="w-80 p-4 bg-orange-50 border border-orange-200 rounded-xl shadow-lg pointer-events-auto animate-in slide-in-from-right-8 fade-in duration-300"
                    >
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                                <svg
                                    className="w-5 h-5 text-orange-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    ></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-orange-800">
                                    {toast.title}
                                </h4>
                                <p className="text-xs text-orange-700 mt-1 leading-relaxed">
                                    {toast.message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

PosIndex.layout = (page) => <AppLayout>{page}</AppLayout>;
