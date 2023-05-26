module.exports = {
    darkMode: true,
    content: [
        // "./src/app/**/*.{js,ts,jsx,tsx}",
        // "./src/components/**/*.{js,ts,jsx,tsx}",
        // "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ["Quicksand", "ui-sans-serif", "Georgia"],
                body: ["Montserrat", "ui-sans-serif", "Georgia"],
                standard: ["Inter", "sans-serif"],
                cursive: ["Architects Daughter", "cursive", "ui-sans-serif"],
            },
            colors: {
                primary: "#FD024B", // pink
                secondary: "#0C86F8", // cyan
                tertiary: "#fff056", // yellow
                customGray: "rgba(10, 10, 10, 0.7)",
            },
            keyframes: {
                flashing: {
                    "0%": { opacity: "1" },
                    "50%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                flashing: "flashing 4s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};
