export default function CartItem({ item, formatRupiah, onUpdate, onRemove }) {
    const fallbackImage = (item.product.categories && item.product.categories.length > 0) ? item.product.categories[0].image_path : 'https://placehold.co/100x100/eeeeee/999999?text=No+Img';
    const imageSource = item.product.image_path || fallbackImage;

    return (
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-low-white shadow-sm">
            <img src={imageSource} alt={item.product.name} className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-low-white" />
            
            <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-dark truncate leading-tight mb-1">{item.product.name}</h4>
                <div className="text-xs text-blue-2 font-bold">{formatRupiah(item.product.price)}</div>
            </div>

            <div className="flex flex-col items-end gap-1">
                <button onClick={() => onRemove(item.product.id)} className="text-[10px] text-red-500 hover:underline px-1">
                    Hapus
                </button>
                <div className="flex items-center bg-gray-50 rounded-lg border border-low-white">
                    <button 
                        onClick={() => onUpdate(item.product.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center text-dark hover:bg-low-white rounded-l-lg transition"
                    >
                        -
                    </button>
                    <span className="w-8 text-center text-sm font-semibold text-blue-2">
                        {item.quantity}
                    </span>
                    <button 
                        onClick={() => onUpdate(item.product.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center text-dark hover:bg-low-white rounded-r-lg transition"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
