import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";

export default function SidebarUserDropup({ user }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const name = user?.name || "Admin Kasir";
    const role =
        user?.roles?.length > 0
            ? user.roles.map((r) => r.name).join(", ")
            : "Administrator";
    const avatarUrl =
        user?.avatar ||
        `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0b85ff&color=fff&bold=true`;

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-full flex justify-center" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none rounded-full ring-2 ring-transparent hover:ring-white transition-all"
                title={name}
            >
                <img
                    src={avatarUrl}
                    alt="Profile Avatar"
                    className="size-12 rounded-full object-cover"
                />
            </button>

            {isOpen && (
                <div className="absolute bottom-full mb-3 left-0 w-56 bg-white rounded-xl shadow-lg border border-low-white overflow-hidden z-50 flex flex-col font-inter text-left">
                    <div className="px-4 py-3 border-b border-low-white">
                        <p className="text-sm font-semibold text-blue-2 truncate">
                            {name}
                        </p>
                        <p className="text-xs font-medium text-dark opacity-80 truncate">
                            {role}
                        </p>
                    </div>
                    <div className="py-2 px-2 flex flex-col gap-1">
                        <Link
                            href="/settings/profile"
                            className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-2 hover:bg-blue-2 hover:text-white rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pengaturan
                        </Link>
                        <Link
                            href="/logout"
                            method="post"
                            as="button"
                            className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-2 hover:bg-blue-2 hover:text-white rounded-lg transition-colors"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
