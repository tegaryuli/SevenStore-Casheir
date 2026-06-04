import { Head } from "@inertiajs/react";
import AppLayout from "./layouts/App-Layout";

export default function Products() {
    return (
        <div className="bg-background p-6 text-foreground">
            <Head title="Products" />
            <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
            <p className="mt-2 text-sm text-muted">Manage store product catalog.</p>
        </div>
    );
    
}
Products.layout = (page) => <AppLayout>{page}</AppLayout>;
