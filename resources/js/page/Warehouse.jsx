import AppLayout from "@/layouts/App-Layout";
import Index from "@/features/Gudang/Index";
import History from "@/features/Gudang/History";

export default function Warehouse({ view, ...props }) {
    if (view === "history") return <History {...props} />;
    return <Index {...props} />;
}

Warehouse.layout = (page) => <AppLayout>{page}</AppLayout>;
