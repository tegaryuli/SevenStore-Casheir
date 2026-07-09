import { Link } from "@inertiajs/react";

export default function Breadcrumb({ items }) {
    if (!items || items.length === 0) return null;

    return (
        <nav
            className="flex mb-6 text-sm font-medium text-gray-500"
            aria-label="Breadcrumb"
        >
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        <li key={index} className="inline-flex items-center">
                            {index > 0 && (
                                <svg
                                    className="w-4 h-4 mx-1 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            )}

                            {!isLast && item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-blue transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-blue-2 font-semibold">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
