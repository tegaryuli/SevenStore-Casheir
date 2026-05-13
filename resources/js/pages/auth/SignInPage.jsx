import { Link, useForm } from "@inertiajs/react";
import { LabeInput } from "@/components/LabeInput";
import { t } from "@/lib/i18n";
export default function SignInPage({ children }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    function submit(e) {
        e.preventDefault();
        post("/login");
    }

    return (
        <div className="overflow-hidden relative min-h-screen bg-dark text-light flex items-center justify-center p-8 sm:p-16">
            
            {/* start of background effect */}
            <div
                className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-ascent/20 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-confirm/10 blur-3xl"
                aria-hidden
            />
            {/* end of background effect */}


            <div className="w-full sm:max-w-sm">
                <div className="mb-6 px-4 pt-10 text-center sm:px-1 sm:pt-0">
                    <h1 className="text-xl sm:text-2xl uppercase font-semibold tracking-tight text-light">{t("auth.title")}</h1>
                    <p className="mt-2 text-sm text-gray/80">{t("auth.subtitle")}</p>
                </div>
                <form
                    onSubmit={submit}
                    className="space-y-4 rounded-none bg-dark px-4 py-5 shadow-none sm:rounded-md  sm:p-6 sm:shadow-lg"
                >
                    <LabeInput
                        id="email"
                        name="email"
                        label={t("auth.usernameOrEmail")}
                        type="text"
                        autoComplete="email"
                        placeholder={t("auth.emailLabel")}
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        error={errors.email}
                        tabIndex='1'
                    />

                    <LabeInput
                        id="password"
                        name="password"
                        label={t("auth.password")}
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        error={errors.password}
                        tabIndex='2'
                        rightElement={
                            <a href="#" className="text-xs text-gray hover:text-confirm/80 hover:underline" tabIndex='999'>
                                {t("auth.forgotPassword")}
                            </a>
                        }
                    />

                    <label className="flex items-center gap-2 text-sm text-gray">
                        <input
                            
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData("remember", e.target.checked)}
                            className="rounded border-gray/25 bg-dark text-ascent focus:ring-ascent/30"
                        />
                        {t("auth.rememberMe")}
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-md bg-ascent px-3 py-2 text-sm font-medium text-light transition-colors hover:bg-confirm/80 disabled:opacity-60"
                    >
                        {t("auth.signIn")}
                    </button>
                </form>

                        {/* delete after prod */}
                <div className="mt-4 px-4 text-center sm:px-1">
                    <Link href="/" className="text-sm text-gray hover:text-light hover:underline">
                        {t("auth.backHome")}
                    </Link>
                </div>

                {children ? <div className="mt-4 px-4 sm:px-1 justify-center flex">{children}</div> : null}
            </div>
        </div>
    );
}