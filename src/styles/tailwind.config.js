/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                bgDark: "var(--bg-dark)",
                bgGradientDark: "var(--bg-gradient-dark)",
                textPrimary: "var(--text-primary)",
                textSecondary: "var(--text-secondary)",
                textAccent: "var(--text-accent)",
                btnPrimary: "var(--btn-primary)",
                btnHover: "var(--btn-hover)",
                borderLight: "var(--border-light)",
            },
        },
    },
    plugins: [],
};
