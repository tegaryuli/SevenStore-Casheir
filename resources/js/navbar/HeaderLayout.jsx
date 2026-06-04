import { Link, usePage, router } from "@inertiajs/react";
import Header from "@/components/Header";

export default function HeaderLayouts({ user, children }) {
    const { url } = usePage(); 

    const navigations = [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Settings', href: '/settings' },
    ];

    function logout() {
        router.post("/logout");
    }

    const navContent = (
        <nav className="flex gap-6">
            {navigations.map((nav) => (
                <Link 
                    key={nav.name} 
                    href={nav.href}
                    className={`text-sm font-medium tracking uppercase transition-colors ${url === nav.href ? 'text-ascent font-bold' : 'text-gray hover:text-light'}`}
                >
                    {nav.name}
                </Link>
            ))}
        </nav>
    );

    return (
        <>
            <Header leftContent={navContent}>
                <span className="text-sm font-medium text-gray mr-4">
                    Halo, <span className="text-light">{user?.name ?? user?.email ?? "—"}</span>
                </span>
                <a className="text-gray text-sm font-medium tracking-[0.10em] uppercase hover:text-dissucces/80 hover:underline cursor-pointer" onClick={logout}>
                    Logout
                </a>
            </Header>

            {children}
        </>
    );
}
