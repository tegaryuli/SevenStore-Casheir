import { Link, useForm } from "@inertiajs/react";
import { LabeInput } from "@/components/LabeInput";
import { t } from "@/lib/i18n";
import Bubbles from "@/components/BackgroundBubble";

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
        <div className="overflow-hidden relative min-h-screen bg-white text-blue-2 flex items-center justify-center p-8 sm:p-16">
            <Bubbles />
            <div className="w-full sm:max-w-sm">
                <div className="mb-6 px-4 pt-10 text-center sm:px-1 sm:pt-0">
                    <h1 className="text-xl sm:text-2xl uppercase font-semibold tracking-[3px] text-gray-12">
                        {t("auth.title")}
                    </h1>
                    <p className="mt-2 text-md text-gray-11">
                        {t("auth.subtitle")}
                    </p>
                </div>
                <form
                    onSubmit={submit}
                    className="space-y-4 rounded-none bg-white px-4 py-5 shadow-none sm:rounded-md sm:p-6 sm:shadow-md"
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
                        tabIndex="1"
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
                        tabIndex="2"
                        rightElement={
                            <a
                                href="#"
                                className="text-xs text-gray-11 hover:text-blue-11 hover:underline"
                                tabIndex="999"
                            >
                                {t("auth.forgotPassword")}
                            </a>
                        }
                    />

                    <label className="flex items-center gap-2 text-sm text-gray-11">
                        <input
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                            className="rounded border-gray-7 bg-white text-blue-9 focus:ring-blue-a6"
                        />
                        {t("auth.rememberMe")}
                    </label>

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-md bg-blue-9 px-3 py-2 text-sm font-medium text-blue-contrast transition-colors hover:bg-blue-10 disabled:opacity-60"
                    >
                        {t("auth.signIn")}
                    </button>
                </form>

                {/* delete after prod */}
                <div className="mt-4 px-4 text-center sm:px-1">
                    <Link
                        href="/"
                        className="text-sm text-gray-11 hover:text-gray-12 hover:underline"
                    >
                        {t("auth.backHome")}
                    </Link>
                </div>

                {children ? (
                    <div className="mt-4 px-4 sm:px-1 justify-center flex">
                        {children}
                    </div>
                ) : null}
            </div>
        </div>
    );
}
