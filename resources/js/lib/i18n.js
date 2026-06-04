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
            title: "Dasboard",
            kicker: "Area Dashboard",
            heading: "Kamu Berhasil Masuk",
            blurb: "Anda sudah masuk. Dari sini nanti bisa ditambah ringkasan penjualan, stok, dan menu lain.",
            loggedInAs: "Halo ,",
            navDemo: "Demo",
            logout: "Keluar",
            sessionNoteTitle: "Sesi Masuk",
            sessionNoteBody:
                "Laravel memakai guard session. Setelah login, cookie sesi mengenali Anda sampai logout atau sesi berakhir. Jadi, gunakan dengan bijak waktumu",
        },
        auth: {
            title: "Masuk",
            subtitle: "Masukan alamat Email untuk melanjutkan.",
            usernameOrEmail: "Email",
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
