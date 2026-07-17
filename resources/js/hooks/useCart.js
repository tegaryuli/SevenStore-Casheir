import { useState, useMemo, useRef, useCallback } from "react";

export function useCart({ showAlert, showConfirm }) {
    const [cart, setCart] = useState([]);
    const lastScannedProductId = useRef(null);

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + parseFloat(item.subtotal), 0);
    }, [cart]);

    const addToCart = useCallback((product, addQty = 1) => {
        let hasError = false;

        setCart((prev) => {
            const existing = prev.find((item) => item.product.id === product.id);
            if (existing) {
                const newQuantity = existing.quantity + addQty;
                if (newQuantity <= 0) {
                    return prev.filter((item) => item.product.id !== product.id);
                }
                if (newQuantity > product.stock) {
                    hasError = true;
                    return prev;
                }
                lastScannedProductId.current = product.id;
                return prev.map((item) =>
                    item.product.id === product.id
                        ? {
                              ...item,
                              quantity: newQuantity,
                              subtotal: newQuantity * parseFloat(product.price),
                          }
                        : item,
                );
            } else {
                if (addQty <= 0) return prev;
                if (addQty > product.stock) {
                    hasError = true;
                    return prev;
                }
                lastScannedProductId.current = product.id;
                return [
                    ...prev,
                    {
                        product,
                        quantity: addQty,
                        subtotal: addQty * parseFloat(product.price),
                    },
                ];
            }
        });

        if (hasError) {
            showAlert(
                "Stok Terbatas",
                `Stok "${product.name}" tidak mencukupi untuk jumlah tersebut! (Tersedia: ${product.stock})`,
            );
        }
    }, [showAlert]);

    const updateQuantity = useCallback((productId, newQuantity) => {
        if (newQuantity <= 0) {
            setCart((prev) => prev.filter((item) => item.product.id !== productId));
            return;
        }

        let hasError = false;
        let errorMsg = "";

        setCart((prev) =>
            prev.map((item) => {
                if (item.product.id === productId) {
                    if (newQuantity > item.product.stock) {
                        hasError = true;
                        errorMsg = `Stok "${item.product.name}" hanya tersisa ${item.product.stock} item.`;
                        return item;
                    }
                    return {
                        ...item,
                        quantity: newQuantity,
                        subtotal: newQuantity * parseFloat(item.product.price),
                    };
                }
                return item;
            }),
        );

        if (hasError) showAlert("Batas Maksimal", errorMsg);
    }, [showAlert]);

    const removeFromCart = useCallback((productId) => {
        setCart((prev) => prev.filter((item) => item.product.id !== productId));
    }, []);

    const clearCart = useCallback(() => {
        showConfirm(
            "Kosongkan Keranjang",
            "Apakah Anda yakin ingin menghapus seluruh pesanan yang ada di keranjang saat ini?",
            () => {
                setCart([]);
            },
        );
    }, [showConfirm]);

    return {
        cart,
        setCart,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        lastScannedProductId
    };
}
