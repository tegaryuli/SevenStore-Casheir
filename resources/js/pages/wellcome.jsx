import { usePage } from "@inertiajs/react";
import { Button } from "@/components/Button";
import Headbar from "@/layout/Headbar";
import { t } from "@/lib/i18n";

export default function Wellcome() {
    const auth = usePage().props.auth;

    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-light">
            <div
                className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-ascent/20 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-confirm/10 blur-3xl"
                aria-hidden
            />

            <Headbar>
                <div className="hidden" />
            </Headbar>

            <main className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-24 pt-28 sm:px-8 sm:pt-32">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray">
                    {t("welcome.kicker")}
                </p>
                <h1 className="text-balance text-4xl font-semibold tracking-tight text-light sm:text-5xl">
                    {t("welcome.title")}
                </h1>
                <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-gray">
                    {t("welcome.subtitle")}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Button href="/demo">
                        {t("welcome.ctaDemo")}
                    </Button>
                    
                    {auth?.user ? (
                        <Button href="/dashboard" className="border-ascent bg-ascent text-light hover:bg-confirm/80">
                            {t("welcome.ctaDashboard")}
                        </Button>
                    ) : (
                        <Button href="/login" className="border-ascent bg-ascent text-light hover:bg-confirm/80">
                            {t("welcome.ctaLogin")}
                        </Button>
                    )}
                </div>
            </main>
        </div>
    );
}
