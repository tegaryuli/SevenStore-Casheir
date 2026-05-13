import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import "../css/app.css";

createInertiaApp({
    progress: false,
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.jsx", { eager: true });
        const path = `./pages/${name}.jsx`;
        const page = pages[path];
        if (!page) {
            throw new Error(`Halaman tidak ditemukan: ${path}`);
        }
        const component = page.default ?? page;
        if (typeof component !== "function") {
            throw new Error(
                `Halaman "${name}" tidak mengekspor komponen default. Periksa export default di file tersebut.`,
            );
        }
        return component;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
