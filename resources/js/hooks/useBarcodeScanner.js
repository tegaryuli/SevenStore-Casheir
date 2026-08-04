import { useEffect, useRef, useCallback } from "react";

export function useBarcodeScanner({
    products,
    cart,
    addToCart,
    showToast,
    isPaymentModalOpen,
    isReceiptModalOpen,
    setIsPaymentModalOpen,
    searchInputRef,
    lastScannedProductId,
}) {
    const barcodeBuffer = useRef("");
    const barcodeTimeout = useRef(null);
    const lastEnterTime = useRef(0);

    const processBarcodeScan = useCallback((scannedCode) => {
        let multiplier = 1;
        let searchString = scannedCode.trim();

        if (searchString.includes("*")) {
            const parts = searchString.split("*");
            const potentialMultiplier = parseInt(parts[0].trim());
            if (!isNaN(potentialMultiplier) && potentialMultiplier > 0) {
                multiplier = potentialMultiplier;
                searchString = parts.slice(1).join("*").trim();
            }
        }

        const searchSku = searchString.replace(/\s+/g, "").toLowerCase();
        if (!searchSku) return;

        let exactMatch = products.find(
            (p) =>
                p.sku && p.sku.replace(/\s+/g, "").toLowerCase() === searchSku,
        );

        if (!exactMatch) {
            exactMatch = products.find(
                (p) => p.name.toLowerCase() === searchString.toLowerCase(),
            );
        }

        if (exactMatch) {
            addToCart(exactMatch, multiplier);
        } else {
            showToast(
                "Pencarian Gagal",
                "Barcode atau produk yang dicari tidak ditemukan di database!",
            );
        }
    }, [products, addToCart, showToast]);

    useEffect(() => {
        const handleGlobalKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                e.preventDefault();
                if (
                    cart.length > 0 &&
                    !isPaymentModalOpen &&
                    !isReceiptModalOpen
                ) {
                    setIsPaymentModalOpen(true);
                }
                return;
            }

            if (e.key === "Escape") {
                e.preventDefault();
                if (document.activeElement && document.activeElement.blur) {
                    document.activeElement.blur();
                }
                return;
            }

            if (
                e.target.tagName === "INPUT" ||
                e.target.tagName === "TEXTAREA" ||
                e.target.tagName === "SELECT"
            ) {
                return;
            }

            if (e.key === "/") {
                e.preventDefault();
                searchInputRef.current?.focus();
            } else if (e.key === "Enter") {
                const now = Date.now();
                if (barcodeBuffer.current.trim() !== "") {
                    e.preventDefault();
                    e.stopPropagation();
                    processBarcodeScan(barcodeBuffer.current);
                    barcodeBuffer.current = "";
                    lastEnterTime.current = now;
                } else if (now - lastEnterTime.current < 200) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            } else if (e.key === "+" || e.key === "-") {
                e.preventDefault();
                if (lastScannedProductId.current) {
                    const lastProduct = products.find(
                        (p) => p.id === lastScannedProductId.current,
                    );
                    if (lastProduct) {
                        addToCart(lastProduct, e.key === "+" ? 1 : -1);
                    }
                }
            } else if (e.key.length === 1) {
                barcodeBuffer.current += e.key;

                clearTimeout(barcodeTimeout.current);
                barcodeTimeout.current = setTimeout(() => {
                    barcodeBuffer.current = "";
                }, 100);
            }
        };

        window.addEventListener("keydown", handleGlobalKeyDown);
        return () => window.removeEventListener("keydown", handleGlobalKeyDown);
    }, [
        products,
        cart,
        isPaymentModalOpen,
        isReceiptModalOpen,
        setIsPaymentModalOpen,
        addToCart,
        lastScannedProductId,
        processBarcodeScan,
        searchInputRef,
    ]);

    return { processBarcodeScan };
}
