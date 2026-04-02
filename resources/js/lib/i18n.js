const dictionary = {
    id: {
        auth: {
            title: "Masuk",
            subtitle: "untuk melanjutkan ke akun Anda",
            usernameOrEmail: "Nama pengguna atau alamat email",
            password: "Kata sandi",
            forgotPassword: "Lupa kata sandi?",
            rememberMe: "Ingat saya",
            signIn: "Masuk",
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
