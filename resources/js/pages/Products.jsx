import { Head } from "@inertiajs/react";

export default function Products() {
    return (
        <div className="min-h-screen bg-bggray p-6 text-veryhite">
            <Head title="Products" />
            <h1 className="text-2xl font-semibold tracking-tight">Products</h1>
            <p className="mt-2 text-sm text-whgray">Manage store product catalog.</p>
        </div>
    );
}
