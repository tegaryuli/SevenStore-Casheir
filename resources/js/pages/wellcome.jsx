import { usePage } from "@inertiajs/react";
import { Button } from "@/components/Button";
import { t } from "@/lib/i18n";
import Bubbles from "@/components/Background-Bubble";

export default function Wellcome() {
    const auth = usePage().props.auth;

    return (
        <div className="relative min-h-screen overflow-hidden bg-white text-gray-12">
            <Bubbles />
            <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-24 pt-28 sm:px-8 sm:pt-32">
                <p className="mb-3 text-sm font-medium uppercase tracking-[3px] text-gray-11">
                    Kasir Sevens
                </p>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-12 sm:text-5xl">
                    {t("welcome.title")}
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-gray-11">
                    {t("welcome.subtitle")}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    {auth?.user ? (
                        <Button
                            href="/dashboard"
                            className="border-blue-9 bg-blue-9 text-blue-contrast hover:bg-blue-10 hover:border-blue-10"
                        >
                            {t("welcome.ctaDashboard")}
                        </Button>
                    ) : (
                        <Button
                            href="/login"
                            className="border-blue-9 bg-blue-9 text-blue-contrast hover:bg-blue-10 hover:border-blue-10"
                        >
                            {t("welcome.ctaLogin")}
                        </Button>
                    )}
                </div>
            </main>
        </div>
    );
}
