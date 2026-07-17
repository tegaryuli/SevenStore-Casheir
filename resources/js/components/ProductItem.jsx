import { Link } from "@inertiajs/react";

export function ProductGridItem({ product, formatRupiah, onDelete }) {
    const fallbackImage =
        product.categories.length > 0
            ? product.categories[0].image_path
            : "https://placehold.co/400x400/eeeeee/999999?text=No+Image";
    const imageSource = product.image_path || fallbackImage;

    return (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-low-white hover:shadow-md transition-all group flex flex-col relative">
            <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Link
                    href={`/produk/${product.id}/edit`}
                    className="p-2 bg-white/90 backdrop-blur text-blue hover:text-white hover:bg-blue rounded-lg shadow-sm transition-all"
                    title="Edit Produk"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        ></path>
                    </svg>
                </Link>
                <button
                    onClick={() => onDelete(product.id, product.name)}
                    className="p-2 bg-white/90 backdrop-blur text-red-500 hover:text-white hover:bg-red-500 rounded-lg shadow-sm transition-all"
                    title="Hapus Produk"
                >
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        ></path>
                    </svg>
                </button>
            </div>

            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-50 mb-4 border border-low-white">
                <img
                    src={imageSource}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.stock <= 20 && (
                    <span className="absolute bottom-2 right-2 bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
                        Stok Menipis
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
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-blue-2 font-bold">
                        {formatRupiah(product.price)}
                    </span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-medium">
                        Stok: {product.stock}
                    </span>
                </div>
            </div>
        </div>
    );
}

export function ProductTableRow({ product, formatRupiah, onDelete }) {
    const fallbackImage =
        product.categories.length > 0
            ? product.categories[0].image_path
            : "https://placehold.co/100x100/eeeeee/999999?text=No+Img";
    const imageSource = product.image_path || fallbackImage;

    return (
        <tr className="hover:bg-gray-50 transition-colors group">
            <td className="px-6 py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={imageSource}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover bg-gray-100 border border-low-white"
                    />
                    <span className="font-medium text-blue-2">
                        {product.name}
                    </span>
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
            <td className="px-6 py-3 font-semibold text-blue-2">
                {formatRupiah(product.price)}
            </td>
            <td className="px-6 py-3">
                <span
                    className={`font-medium ${product.stock <= 20 ? "text-red-500" : "text-gray-700"}`}
                >
                    {product.stock}
                </span>
            </td>
            <td className="px-6 py-3 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link
                        href={`/produk/${product.id}/edit`}
                        className="p-1.5 text-blue hover:bg-blue-50 rounded-md transition-colors"
                        title="Edit"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            ></path>
                        </svg>
                    </Link>
                    <button
                        onClick={() => onDelete(product.id, product.name)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                        title="Hapus"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </td>
        </tr>
    );
}
