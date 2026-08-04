import { Link } from "@inertiajs/react";

export function GudangGridItem({ product, onOpenModal }) {
    const fallbackImage =
        product.categories.length > 0
            ? product.categories[0].image_path || "/images/Photo-error.jpg"
            : "/images/Photo-error.jpg";
    const imageSource = product.image_path || fallbackImage;

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-low-white hover:shadow-md transition-all group flex flex-col relative">
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button
                    onClick={() => onOpenModal(product)}
                    disabled={product.warehouse_stock <= 0}
                    className="px-3 py-1.5 bg-blue-2 text-white text-xs font-semibold rounded-lg shadow-sm hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Keluarkan Stok
                </button>
            </div>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4 border border-low-white">
                <img
                    src={imageSource}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/images/Photo-error.jpg";
                    }}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.warehouse_stock <= 0 && (
                    <span className="absolute bottom-2 right-2 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                        Gudang Kosong
                    </span>
                )}
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex flex-wrap gap-1 mb-2">
                    {product.categories.slice(0, 2).map((c) => (
                        <span
                            key={c.id}
                            className="text-xs bg-blue text-white font-semibold px-2 py-0.5 rounded-md truncate max-w-[80px]"
                        >
                            {c.name}
                        </span>
                    ))}
                    {product.categories.length > 2 && (
                        <span className="text-[10px] bg-gray-100 text-gray-500 font-semibold px-1.5 py-0.5 rounded-md">
                            +{product.categories.length - 2}
                        </span>
                    )}
                    {product.categories.length === 0 && (
                        <span className="text-[10px] bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-md">
                            Tanpa Kategori
                        </span>
                    )}
                </div>
                <h3 className="text-md font-semibold text-blue-2 line-clamp-2 leading-tight mb-2 flex-1">
                    {product.name}
                </h3>
                <div className="flex flex-col gap-1 mt-auto">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-dark font-medium">Gudang:</span>
                        <span className="text-sm font-bold text-vintage-rouge">
                            {product.warehouse_stock} {product.warehouse_unit}
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-dark font-medium">Toko:</span>
                        <span className="text-sm font-bold text-green-600">
                            {product.stock} {product.store_unit}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function GudangTableRow({ product, onOpenModal }) {
    const fallbackImage =
        product.categories.length > 0
            ? product.categories[0].image_path || "/images/Photo-error.jpg"
            : "/images/Photo-error.jpg";
    const imageSource = product.image_path || fallbackImage;

    return (
        <tr className="hover:bg-gray-50 transition-colors group">
            <td className="px-6 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={imageSource}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/Photo-error.jpg";
                        }}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-100 border border-low-white"
                    />
                    <div className="flex flex-col">
                        <span className="font-medium text-blue-2">
                            {product.name}
                        </span>
                        <span className="text-[10px] text-gray-500">
                            Konversi: 1 {product.warehouse_unit || "Segel"} = {product.conversion_rate || 1} {product.store_unit || "Pcs"}
                        </span>
                    </div>
                </div>
            </td>
            <td className="px-6 py-3 font-mono text-gray-500 text-xs">
                {product.sku}
            </td>
            <td className="px-6 py-3">
                <div className="flex flex-wrap gap-1">
                    {product.categories.map((c) => (
                        <span
                            key={c.id}
                            className="inline-flex items-center px-2 py-1 rounded-md  text-xs font-semibold bg-blue text-white"
                        >
                            {c.name}
                        </span>
                    ))}
                    {product.categories.length === 0 && (
                        <span className="text-gray-400 italic text-xs">
                            Kosong
                        </span>
                    )}
                </div>
            </td>
            <td className="px-6 py-3 font-semibold text-vintage-rouge">
                {product.warehouse_stock} {product.warehouse_unit}
            </td>
            <td className="px-6 py-3 font-semibold text-green-600">
                {product.stock} {product.store_unit}
            </td>
            <td className="px-6 py-3 text-right">
                <button
                    onClick={() => onOpenModal(product)}
                    disabled={product.warehouse_stock <= 0}
                    className="px-3 py-1.5 bg-blue-2 text-white text-xs font-semibold rounded-lg shadow-sm hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Keluarkan Stok
                </button>
            </td>
        </tr>
    );
}
