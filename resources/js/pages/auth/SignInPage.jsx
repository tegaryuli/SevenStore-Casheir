import { LabeInput } from "@/components/LabeInput";
import { t } from "@/lib/i18n";

export function LoginLayout({ children }) {
    return (
        <div className="min-h-screen bg-bggray text-veryhite flex items-start justify-center p-8 sm:p-16">
            <div className="w-full sm:max-w-sm">
                <div className="mb-6 px-4 pt-10 text-center sm:px-1 sm:pt-0">
                    <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-veryhite">{t("auth.title")}</h1>
                    <p className="mt-2 text-sm text-veryhite/80">{t("auth.subtitle")}</p>
                </div>

                <form className="space-y-4 rounded-none bg-bggray px-4 py-5 shadow-none sm:rounded-md  sm:p-6 sm:shadow-lg">
                    <LabeInput
                        id="email"
                        label={t("auth.usernameOrEmail")}
                        type="email"
                        autoComplete="on"
                        placeholder={t("auth.emailLabel")}
                    />

                    <LabeInput
                        id="password"
                        label={t("auth.password")}
                        type="password"
                        placeholder="••••••••"
                        rightElement={
                            <a href="#" className="text-xs text-sldgreen hover:underline">
                                {t("auth.forgotPassword")}
                            </a>
                        }
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-sldgreen px-3 py-2 text-sm font-medium text-bggray transition-colors hover:bg-sldgreen/90"
                    >
                        {t("auth.signIn")}
                    </button>
                </form>

                {children ? <div className="mt-4 px-4 sm:px-1">{children}</div> : null}
            </div>
        </div>
    );
}