import Demo from "@/components/DemoLogic";
import { Card } from "@/components/Card";

export default function DemoPage() {
    return (
        <Demo>
            <div className="mx-auto grid w-full max-w-5xl gap-6 px-6 py-10 md:grid-cols-2">
                <Card />

                <Card
                    title="Kartu Produk"
                    footer={<span className="text-xs font-medium text-light/80">Terakhir diperbarui: hari ini</span>}
                >
                    <div className="space-y-2">
                        <p className="text-light">Nama: Kopi Susu Gula Aren</p>
                        <p>Stok: 27</p>
                        <p>Harga: Rp 18.000</p>
                    </div>
                </Card>
            </div>
        </Demo>
    );
}