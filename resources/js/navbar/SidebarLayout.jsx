import { Link, usePage, router } from "@inertiajs/react";
import StripesPatern from "@/components/StripesPatern";

export default function SidebarLayout({ user, navigations = [], children }) {
    const { url } = usePage();

    function logout() {
        router.post("/logout");
    }

    return (
        <div className="flex h-screen w-full bg-surface text-foreground overflow-hidden">
            <aside className="w-64 p-4 flex flex-col shrink-0">
                <div
                    className="flex items-center gap-2 p-3 rounded-md hover:bg-border/30 hover:cursor-pointer"
                    onClick={logout}
                >
                    <div className="bg-ascent size-8 rounded-md flex items-center justify-center text-lg text-background font-bold">
                        7
                    </div>
                    <h2 className="text-lg font-bold text-ascent">Seven</h2>
                </div>
                <div className="mt-5 mb-4 text-sm font-medium text-muted/70 px-2">
                    Menu Utama
                </div>
                <nav className="flex flex-col gap-2">
                    {navigations.map((nav) => {
                        const isActive = url.startsWith(nav.href);
                        return (
                            <Link
                                key={nav.name}
                                href={nav.href}
                                className={`flex items-center gap-3 text-ascent p-3 rounded-md text-sm transition-all duration-200 ${
                                    isActive
                                        ? "bg-ascent/10 font-bold "
                                        : "text-muted hover:text-ascent font-medium"
                                }`}
                            >
                                {nav.icon && (
                                    <nav.icon className="w-4 h-4 shrink-0" />
                                )}
                                {nav.name}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
            {/* children disini akan diganti menjadi main content */}
            {children}
            {/* end of main content */}
        </div>
    );
}
