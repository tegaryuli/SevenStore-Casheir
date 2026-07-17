import AppLayout from "@/layouts/App-Layout";
import Create from "@/features/Payment/Payment";
import Index from "@/features/Payment/PaymentHistory";

export default function Transaction({ view, ...props }) {
    if (view === "create") return <Create {...props} />;
    return <Index {...props} />;
}

Transaction.layout = (page) => <AppLayout>{page}</AppLayout>;
