import { Head, router } from "@inertiajs/react";
import { Button } from "@/components/Button";
import Headbar from "@/layout/Headbar";
import { t } from "@/lib/i18n";

export default function Dashboard({ auth }) {
    const user = auth?.user;

    function logout() {
        router.post("/logout");
    }

    return (
        <div className="relative min-h-screen bg-dark text-light">
            <Head title={t("dashboard.title")} />

            <Headbar
                leftContent={
                    <span className="text-sm font-medium text-gray">
                        {t("dashboard.loggedInAs")}{" "}
                        <span className="text-light">{user?.name ?? user?.email ?? "—"}</span>
                    </span>
                }
            >
                <Button href="/demo" className="border-light/20 bg-transparent hover:border-light/40">
                    {t("dashboard.navDemo")}
                </Button>
                <button
                    type="button"
                    onClick={logout}
                    className="inline-flex items-center justify-center rounded-md border border-disconfirm/40 bg-disconfirm/15 px-5 py-2 text-sm font-semibold text-light transition-colors hover:bg-disconfirm/25"
                >
                    {t("dashboard.logout")}
                </button>
            </Headbar>

            <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-6 pb-24 pt-28 sm:px-8 sm:pt-32">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gray">{t("dashboard.kicker")}</p>
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-light sm:text-4xl">
                    {t("dashboard.heading")}
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-gray">{t("dashboard.blurb")}</p>
                <div className="mt-8 rounded-lg border border-lidark bg-lidark/30 p-5 text-sm text-gray">
                    <p className="font-medium text-light">{t("dashboard.sessionNoteTitle")}</p>
                    <p className="mt-2 leading-relaxed">{t("dashboard.sessionNoteBody")}</p>
                </div>
            </main>
        </div>
    );
}
