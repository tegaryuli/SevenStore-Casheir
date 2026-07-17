import { usePage } from "@inertiajs/react";
import { MASTER_NAVIGATIONS } from "@/lib/config/navigations";

export function H1({ description, className = "", children, ...props }) {
    const { url } = usePage();
    const currentPath = url.split("?")[0];

    const activeNav = [...MASTER_NAVIGATIONS]
        .sort((a, b) => b.href.length - a.href.length)
        .find((nav) => currentPath.startsWith(nav.href));

    const displayTitle = children || (activeNav ? activeNav.name : "");
    const displayDesc =
        description !== undefined
            ? description
            : activeNav
              ? activeNav.description
              : "";

    return (
        <div className="flex flex-col gap-1 max-w-3xl ">
            <h1
                className={`text-3xl font-bold text-blue-2 tracking-tight ${className}`}
                {...props}
            >
                {displayTitle}
            </h1>
            {displayDesc && (
                <p className="text-sm font-normal text-gray-500">
                    {displayDesc}
                </p>
            )}
        </div>
    );
}
