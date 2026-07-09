import { Link } from "@inertiajs/react";
import { twMerge } from "tailwind-merge";

export function Button({ className, children = "Children", ...props }) {
    return (
        <Link
            className={twMerge(
                "inline-flex items-center justify-center rounded-md bg-dark px-5 py-2 text-sm font-semibold text-light border border-transparent hover:border-lidark",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
}
