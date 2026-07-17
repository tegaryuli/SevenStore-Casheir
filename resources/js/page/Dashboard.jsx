import { Head } from "@inertiajs/react";
import { t } from "@/lib/i18n";
import AppLayout from "@/layouts/App-Layout";
import Breadcrumb from "@/components/Breadcrumb";
import { H1 } from "@/components/ui/CustomTag";

export default function Dashboard() {
    return (
        <>
            <Breadcrumb items={[{ label: "Dashboard", href: "/dashboard" }]} />
            <H1 />
            <main className="mx-auto flex w-full max-w-3xl flex-col justify-start px-6 pb-24 pt-28 sm:px-8 sm:pt-32">
                <div className="flex justify-between">
                    <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted">
                        {t("dashboard.kicker")}
                    </p>
                </div>
                <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {t("dashboard.heading")}
                </h1>
                <p className="mt-4 max-w-xl text-pretty text-muted">
                    {t("dashboard.blurb")}
                </p>
                <div className="mt-8 rounded-lg border border-border bg-border/30 p-5 text-sm text-muted">
                    <p className="font-medium text-foreground">
                        {t("dashboard.sessionNoteTitle")}
                    </p>
                    <p className="mt-2 leading-relaxed">
                        {t("dashboard.sessionNoteBody")}
                    </p>
                </div>
            </main>
        </>
    );
}

Dashboard.layout = (page) => <AppLayout>{page}</AppLayout>;
