import React from "react";
import { createRoot } from "react-dom/client";
import { createInertiaApp, router } from "@inertiajs/react";
import "../css/app.css";

createInertiaApp({
    progress: {
        color: "#3B3B3B",
        showSpinner: true,
    },

    title: (title) =>
        title ? `${title} - SevenStore Cashier` : "SevenStore Cashier",

    resolve: (name) => {
        const pages = import.meta.glob(
            [
                "./page/**/*.jsx",
                "./features/auth/**/*.jsx",
                "./features/Profile/**/*.jsx",
            ],
            { eager: true },
        );

        let path = `./page/${name}.jsx`;
        if (name.startsWith("auth/") || name.startsWith("Profile/")) {
            path = `./features/${name}.jsx`;
        }

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
