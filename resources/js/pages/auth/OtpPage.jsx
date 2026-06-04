import { Link, useForm } from "@inertiajs/react";
import { LabeInput } from "@/components/LabeInput";
import { t } from "@/lib/i18n";

export default function OtpPage({ email }) {
    const { data, setData, post, processing, errors } = useForm({
        otp: "",
    });

    function submit(e) {
        e.preventDefault();
        post("/login/otp");
    }

    return (
        <div className="overflow-hidden relative min-h-screen bg-white text-gray-12 flex items-center justify-center p-8 sm:p-16">
            <div
                className="pointer-events-none absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-blue-a6 blur-3xl"
                aria-hidden
            />
            <div
                className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-a4 blur-3xl"
                aria-hidden
            />
            <div className="w-full sm:max-w-sm">
                <div className="mb-6 px-4 pt-10 text-center sm:px-1 sm:pt-0">
                    <h1 className="text-xl sm:text-2xl uppercase font-semibold tracking-[3px] text-gray-12">
                        Verifikasi OTP
                    </h1>
                    <p className="mt-2 text-sm text-gray-11">
                        Kode OTP 6-digit telah dikirim ke email <b>{email}</b>.
                        Silakan periksa email Anda.
                    </p>
                </div>
                <form
                    onSubmit={submit}
                    className="space-y-4 rounded-none bg-white  px-4 py-5 shadow-none sm:rounded-md sm:p-6 sm:shadow-md"
                >
                    <LabeInput
                        id="otp"
                        name="otp"
                        label="Kode OTP"
                        type="text"
                        autoComplete="off"
                        placeholder="••••••"
                        value={data.otp}
                        onChange={(e) => setData("otp", e.target.value)}
                        error={errors.otp}
                        tabIndex="1"
                        maxLength={6}
                    />

                    <button
                        type="submit"
                        disabled={processing}
                        className="w-full rounded-md bg-blue-9 px-3 py-2 text-sm font-medium text-blue-contrast transition-colors hover:bg-blue-10 disabled:opacity-60"
                    >
                        Verifikasi Kode
                    </button>
                </form>

                <div className="mt-4 px-4 text-center sm:px-1">
                    <Link
                        href="/login"
                        className="text-sm text-gray-11 hover:text-gray-12 hover:underline"
                    >
                        Kembali ke Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
