export default function PosProductCard({ product, formatRupiah }) {
    return (
        <div className="bg-white rounded-lg p-3 shadow-sm border border-low-white hover:border-blue-2 hover:bg-gray-50 transition-all flex items-center justify-between w-full">
            <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-dark leading-tight">
                    {product.name}
                </h3>
                <span className="text-xs text-gray-500 mt-1">
                    {product.sku}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-sm text-blue-2 font-bold">
                    {formatRupiah(product.price)}
                </span>
                {product.stock <= 10 && (
                    <span className="text-red-600 text-[10px] font-bold mt-1">
                        Sisa {product.stock}
                    </span>
                )}
            </div>
        </div>
    );
}
