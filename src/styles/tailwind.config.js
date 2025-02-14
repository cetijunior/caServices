/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            translate: {
                '101': '101%',
            },
            keyframes: {
                marquee: {
                    'from': { transform: 'translateX(0%)' },
                    'to': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                marquee: 'marquee 15s linear infinite'
            },
            colors: {
                bgDark: "var(--bg-dark)",
                bgGradientDark: "var(--bg-gradient-dark)",
                textPrimary: "var(--text-primary)",
                textSecondary: "var(--text-secondary)",
                textAccent: "var(--text-accent)",
                btnPrimary: "var(--btn-primary)",
                btnHover: "var(--btn-hover)",
            },
        },
    },
    plugins: [],
};
