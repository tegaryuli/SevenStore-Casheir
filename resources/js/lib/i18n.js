const dictionary = {
    id: {
        welcome: {
            kicker: "Kasir toko",
            title: "Selamat datang",
            subtitle:
                "Kelola penjualan dan stok dengan lebih rapi. Mulai dari sini untuk membuka demo atau masuk ke akun Anda.",
            navDemo: "Demo",
            navLogin: "Masuk",
            ctaDemo: "Lihat demo",
            ctaLogin: "Masuk ke akun",
            navDashboard: "Dasboard",
            ctaDashboard: "Masuk dasboard",
        },
        dashboard: {
            title: "Dasbor",
            kicker: "Area terautentikasi",
            heading: "Dasbor",
            blurb: "Anda sudah masuk. Dari sini nanti bisa ditambah ringkasan penjualan, stok, dan menu lain.",
            loggedInAs: "Masuk sebagai",
            navDemo: "Demo",
            logout: "Keluar",
            sessionNoteTitle: "Sesi",
            sessionNoteBody:
                "Laravel memakai guard session (lihat config/auth.php). Setelah login, cookie sesi mengenali Anda sampai logout atau sesi berakhir.",
        },
        auth: {
            title: "Masuk",
            subtitle: "Masukan alamat email untuk melanjutkan.",
            usernameOrEmail: "Alamat email",
            password: "Kata sandi",
            forgotPassword: "Lupa kata sandi?",
            rememberMe: "Ingat saya",
            signIn: "Masuk",
            emailLabel: "Alamat email",
            backHome: "Kembali ke beranda",
        },
    },
};

export function t(key, locale = "id") {
    const parts = String(key).split(".");
    let value = dictionary[locale];

    for (const part of parts) {
        value = value?.[part];
    }

    return typeof value === "string" ? value : key;
}
