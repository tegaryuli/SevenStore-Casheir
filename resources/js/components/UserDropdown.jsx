import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { HeadbarProfile, ProfileName } from "@/components/HeadbarComponents";

export default function UserDropdown({ user }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const name = user?.name || "Admin Kasir";
    const role = user?.role?.display_name || user?.role?.name || "Administrator";
    const avatarUrl = user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0b85ff&color=fff&bold=true`;

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                <HeadbarProfile className="flex items-center cursor-pointer">
                    <img src={avatarUrl} alt="Profile Avatar" className="size-12 rounded-full object-cover" />
                    <ProfileName className="">{name}</ProfileName>
                    <svg className={`ml-2 w-5 h-5 text-white transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                    <span className="px-4 py-1 ml-2 bg-blue text-white text-md font-medium rounded-lg">{role}</span>
                </HeadbarProfile>
            </button>
            
            {isOpen && (
                <div className="absolute mt-2 w-56 bg-white rounded-xl shadow-lg border border-low-white overflow-hidden z-50 flex flex-col font-inter">
                    <div className="px-4 py-3 border-b border-low-white">
                        <p className="text-sm font-semibold text-blue-2">{name}</p>
                        <p className="text-xs font-medium text-dark opacity-80">{role}</p>
                    </div>
                    <div className="py-2 px-2 flex flex-col gap-1">
                        <Link href="/settings/profile" className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-2 hover:bg-blue-2 hover:text-white rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                            Pengaturan
                        </Link>
                        <Link href="/logout" method="post" as="button" className="block w-full text-left px-4 py-2 text-sm font-medium text-blue-2 hover:bg-blue-2 hover:text-white rounded-lg transition-colors">
                            Logout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
