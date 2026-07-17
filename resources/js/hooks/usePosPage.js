import { useState, useMemo, useRef, useCallback } from "react";
import { router } from "@inertiajs/react";
import { useCart } from "@/hooks/useCart";
import { useBarcodeScanner } from "@/hooks/useBarcodeScanner";

export function usePosPage({ products = [], categories = [], flash }) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(!!flash?.receipt);
    const [isCartOpenMobile, setIsCartOpenMobile] = useState(false);

    const [dialogConfig, setDialogConfig] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "alert",
        onConfirm: null,
    });

    const [toasts, setToasts] = useState([]);
    const searchInputRef = useRef(null);

    const showAlert = useCallback(
        (title, message) =>
            setDialogConfig({
                isOpen: true,
                title,
                message,
                type: "alert",
                onConfirm: null,
            }),
        [],
    );

    const showConfirm = useCallback(
        (title, message, onConfirm) =>
            setDialogConfig({
                isOpen: true,
                title,
                message,
                type: "confirm",
                onConfirm,
            }),
        [],
    );

    const showToast = useCallback((title, message) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, title, message }]);
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, 2500);
    }, []);

    const closeDialog = useCallback(() => {
        setDialogConfig((prev) => ({ ...prev, isOpen: false }));
    }, []);

    const formatRupiah = useCallback((number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    }, []);

    // Initialize Sub-Hooks
    const {
        cart,
        setCart,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        lastScannedProductId,
    } = useCart({ showAlert, showConfirm });

    const { processBarcodeScan } = useBarcodeScanner({
        products,
        cart,
        addToCart,
        showToast,
        isPaymentModalOpen,
        isReceiptModalOpen,
        setIsPaymentModalOpen,
        searchInputRef,
        lastScannedProductId,
    });

    const filteredProducts = useMemo(() => {
        if (search.trim() === "" && selectedCategory === "all") {
            return [];
        }

        return products.filter((product) => {
            const matchSearch =
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                (product.sku || "").toLowerCase().includes(search.toLowerCase());

            const matchCategory =
                selectedCategory === "all" ||
                (product.categories || []).some(
                    (c) => c.id.toString() === selectedCategory,
                );

            return matchSearch && matchCategory;
        });
    }, [products, search, selectedCategory]);

    const handleSearchKeyDown = (e) => {
        if (e.key === "Enter" && search.trim() !== "") {
            e.preventDefault();
            processBarcodeScan(search);
            setSearch("");
        } else if ((e.key === "+" || e.key === "-") && search === "") {
            e.preventDefault();
            if (lastScannedProductId.current) {
                const lastProduct = products.find(
                    (p) => p.id === lastScannedProductId.current,
                );
                if (lastProduct) {
                    addToCart(lastProduct, e.key === "+" ? 1 : -1);
                }
            }
        } else if (e.key === "Tab") {
            if (filteredProducts.length > 0) {
                e.preventDefault();
                const firstProduct = document.getElementById("pos-product-0");
                if (firstProduct) {
                    firstProduct.focus();
                }
            }
        }
    };

    const handleCheckoutSubmit = (cashGiven) => {
        const payload = {
            items: cart.map((c) => ({
                id: c.product.id,
                quantity: c.quantity,
            })),
            cash_given: cashGiven,
            total_amount: cartTotal,
        };

        router.post("/pos/checkout", payload, {
            preserveScroll: true,
            onSuccess: (page) => {
                setIsPaymentModalOpen(false);
                setCart([]);
                if (page.props.flash?.receipt) {
                    setIsReceiptModalOpen(true);
                }
            },
            onError: (err) => {
                showAlert(
                    "Transaksi Gagal",
                    err.checkout || "Terjadi kesalahan sistem saat memproses pembayaran.",
                );
            },
        });
    };

    const categoryOptions = useMemo(() => {
        return categories.map((cat) => ({
            value: cat.id.toString(),
            label: cat.name,
        }));
    }, [categories]);

    const categorySelectProps = {
        value: selectedCategory,
        onChange: (e) => setSelectedCategory(e.target.value),
        options: categoryOptions,
        defaultOption: "Semua Kategori",
        defaultOptionValue: "all",
        className: "max-w-[150px]"
    };

    const searchInputProps = {
        placeholder: "Cari atau Scan Produk...",
        value: search,
        onChange: (e) => setSearch(e.target.value),
        onKeyDown: handleSearchKeyDown,
        className: "max-w-md"
    };

    return {
        search, setSearch,
        selectedCategory, setSelectedCategory,
        isPaymentModalOpen, setIsPaymentModalOpen,
        isReceiptModalOpen, setIsReceiptModalOpen,
        isCartOpenMobile, setIsCartOpenMobile,
        dialogConfig, closeDialog,
        toasts,
        searchInputRef,
        formatRupiah,
        cart, cartTotal, addToCart, updateQuantity, removeFromCart, clearCart,
        filteredProducts,
        handleSearchKeyDown,
        handleCheckoutSubmit,
        flash,
        categories,
        categorySelectProps,
        searchInputProps
    };
}
