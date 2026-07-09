import { useState, useMemo, useRef, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import AppLayout from "../layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { ProductGridItem } from "@/components/ProductItem";
import CartItem from "./Components/CartItem";
import PaymentModal from "./Components/PaymentModal";
import ReceiptModal from "./Components/ReceiptModal";

export default function PosIndex({ products = [], categories = [], flash }) {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    
    // Cart state: [{ product: {...}, quantity: 1, subtotal: 1000 }]
    const [cart, setCart] = useState([]);
    
    // Modals & Mobile UI state
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
    const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(!!flash?.receipt);
    const [isCartOpenMobile, setIsCartOpenMobile] = useState(false);
    
    const searchInputRef = useRef(null);

    // Auto-focus search on load
    useEffect(() => {
        if (!isPaymentModalOpen && !isReceiptModalOpen) {
            searchInputRef.current?.focus();
        }
    }, [isPaymentModalOpen, isReceiptModalOpen]);

    // Utilities
    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    // Filter products
    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                                (product.sku || "").toLowerCase().includes(search.toLowerCase());
            
            const matchCategory = selectedCategory === "all" || 
                (product.categories || []).some(c => c.id.toString() === selectedCategory);
                
            return matchSearch && matchCategory;
        });
    }, [products, search, selectedCategory]);

    // Cart actions
    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.product.id === product.id);
            if (existing) {
                // If stock is limited, don't allow adding more than stock
                if (existing.quantity >= product.stock) {
                    alert(`Stok ${product.name} habis!`);
                    return prev;
                }
                return prev.map(item => 
                    item.product.id === product.id 
                        ? { ...item, quantity: item.quantity + 1, subtotal: (item.quantity + 1) * parseFloat(product.price) }
                        : item
                );
            } else {
                if (product.stock < 1) {
                    alert(`Stok ${product.name} habis!`);
                    return prev;
                }
                return [...prev, { product, quantity: 1, subtotal: parseFloat(product.price) }];
            }
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCart(prev => prev.map(item => {
            if (item.product.id === productId) {
                if (newQuantity > item.product.stock) {
                    alert(`Stok hanya tersisa ${item.product.stock}`);
                    return item;
                }
                return { ...item, quantity: newQuantity, subtotal: newQuantity * parseFloat(item.product.price) };
            }
            return item;
        }));
    };

    const removeFromCart = (productId) => {
        setCart(prev => prev.filter(item => item.product.id !== productId));
    };

    const clearCart = () => {
        if (confirm("Kosongkan keranjang?")) setCart([]);
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + parseFloat(item.subtotal), 0);
    }, [cart]);

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter' && search.trim() !== '') {
            e.preventDefault();
            
            // Prioritize finding exact SKU match first
            let exactMatch = products.find(p => p.sku && p.sku.toLowerCase() === search.trim().toLowerCase());
            
            // Fallback to exact name match if barcode is not SKU but name
            if (!exactMatch) {
                exactMatch = products.find(p => p.name.toLowerCase() === search.trim().toLowerCase());
            }

            if (exactMatch) {
                addToCart(exactMatch);
                setSearch(''); // Clear for next scan
            } else {
                // Optional: Play error beep or visual cue
                alert("Barcode tidak ditemukan di database!");
                setSearch('');
            }
        }
    };

    const handleCheckoutSubmit = (cashGiven) => {
        // Prepare data for backend
        const payload = {
            items: cart.map(c => ({ id: c.product.id, quantity: c.quantity })),
            cash_given: cashGiven,
            total_amount: cartTotal
        };

        router.post('/pos/checkout', payload, {
            preserveScroll: true,
            onSuccess: (page) => {
                setIsPaymentModalOpen(false);
                setCart([]);
                if (page.props.flash?.receipt) {
                    setIsReceiptModalOpen(true);
                }
            },
            onError: (err) => {
                alert(err.checkout || "Terjadi kesalahan saat pembayaran");
            }
        });
    };

    return (
        <div className="w-full h-full text-foreground font-inter flex flex-col relative overflow-hidden">
            <Head title="Kasir (POS)" />
            
            <div className="flex-none mb-4">
                <Breadcrumb items={[
                    { label: "Dashboard", href: "/dashboard" },
                    { label: "Kasir (POS)" }
                ]} />
                <h1 className="text-3xl font-bold text-blue-2 tracking-tight mt-2">Point of Sale</h1>
            </div>

            {/* Split Screen Layout */}
            <div className="flex-1 flex gap-6 overflow-hidden relative">
                
                {/* Left Side: Product Catalog (70%) */}
                <div className="flex-1 flex flex-col bg-white rounded-2xl border border-low-white shadow-sm overflow-hidden p-4">
                    
                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-3 mb-4">
                        <div className="relative flex-1 max-w-md">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-dark opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input
                                ref={searchInputRef}
                                type="text"
                                placeholder="Cari nama atau barcode (lalu Enter)..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                                className="w-full pl-10 pr-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2"
                                autoFocus
                            />
                        </div>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-4 py-2 border border-low-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-2 text-sm text-blue-2 bg-white"
                        >
                            <option value="all">Semua Kategori</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        {filteredProducts.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center opacity-50">
                                <span className="text-sm">Tidak ada produk ditemukan.</span>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-20">
                                {filteredProducts.map(product => (
                                    <div key={product.id} onClick={() => addToCart(product)} className="cursor-pointer">
                                        {/* Reuse ProductGridItem but make it purely presentational / clickable for POS */}
                                        <PosProductCard product={product} formatRupiah={formatRupiah} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Cart (30%) - Hidden on mobile unless toggled */}
                <div className={`
                    absolute md:relative right-0 top-0 h-full w-full md:w-80 lg:w-96 
                    bg-white md:rounded-2xl border border-low-white shadow-xl md:shadow-sm
                    flex-col z-40
                    ${isCartOpenMobile ? 'flex' : 'hidden md:flex'}
                `}>
                    <div className="p-4 border-b border-low-white flex justify-between items-center bg-blue-2 text-white md:rounded-t-2xl">
                        <h2 className="font-bold text-lg flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Pesanan Aktif
                        </h2>
                        {cart.length > 0 && (
                            <button onClick={clearCart} className="text-xs font-semibold bg-white/20 px-2 py-1 rounded hover:bg-white/30 transition">
                                Kosongkan
                            </button>
                        )}
                        <button onClick={() => setIsCartOpenMobile(false)} className="md:hidden p-1">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
                        {cart.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center opacity-40 text-center">
                                <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                <p className="text-sm">Keranjang kosong.<br/>Tap produk untuk menambah.</p>
                            </div>
                        ) : (
                            cart.map(item => (
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
                            <span className="font-semibold text-dark">Total</span>
                            <span className="font-bold text-2xl text-blue-2">{formatRupiah(cartTotal)}</span>
                        </div>
                        <button 
                            onClick={() => setIsPaymentModalOpen(true)}
                            disabled={cart.length === 0}
                            className="w-full py-3 bg-blue-2 text-white font-bold rounded-xl shadow-md hover:bg-blue-9 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Bayar Sekarang
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Floating Action Button */}
            {!isCartOpenMobile && (
                <button 
                    onClick={() => setIsCartOpenMobile(true)}
                    className="md:hidden absolute bottom-6 right-6 w-14 h-14 bg-blue-2 text-white rounded-full shadow-2xl flex items-center justify-center z-30"
                >
                    <div className="relative">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white">
                                {cart.reduce((sum, item) => sum + item.quantity, 0)}
                            </span>
                        )}
                    </div>
                </button>
            )}

            {/* Modals */}
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
                    onClose={() => {
                        setIsReceiptModalOpen(false);
                        setTimeout(() => searchInputRef.current?.focus(), 100);
                    }}
                />
            )}
        </div>
    );
}

// Simple stripped-down product card for POS
function PosProductCard({ product, formatRupiah }) {
    const fallbackImage = (product.categories && product.categories.length > 0) ? product.categories[0].image_path : 'https://placehold.co/400x400/eeeeee/999999?text=No+Image';
    const imageSource = product.image_path || fallbackImage;

    return (
        <div className="bg-white rounded-xl p-3 shadow-sm border border-low-white hover:border-blue-2 hover:shadow-md transition-all group flex flex-col h-full relative">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-50 mb-3 border border-low-white">
                <img src={imageSource} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {product.stock <= 10 && (
                    <span className="absolute bottom-1 right-1 bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                        Sisa {product.stock}
                    </span>
                )}
            </div>
            <div className="flex flex-col flex-1">
                <h3 className="text-xs font-semibold text-dark line-clamp-2 leading-tight mb-1 flex-1">{product.name}</h3>
                <span className="text-sm text-blue-2 font-bold">{formatRupiah(product.price)}</span>
            </div>
        </div>
    );
}

PosIndex.layout = (page) => <AppLayout>{page}</AppLayout>;
