import AppLayout from "@/layouts/App-Layout";
import Form from "@/features/Products/Form";
import Index from "@/features/Products/Index";

export default function Products({ view, ...props }) {
    if (view === "form") return <Form {...props} />;
    return <Index {...props} />;
}

Products.layout = (page) => <AppLayout>{page}</AppLayout>;
