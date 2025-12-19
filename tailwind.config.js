/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            white: "#fff",
            primary: "#0d2c54", // Prussian Blue
            secondary: "#9cafb7", // Pewter Blue
            tertiary: "#3a5a40", // Hunter Green
            quaternary: "#de6b48", // Burnt Sienna
            quinary: "#dcf4a7", // Yellow Green Crayola
        },
        extend: {
            fontFamily: {
                serif: ["Rubik"],
            },
            width: {
                rotator: "28rem",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(50px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                fadeInUp: "fadeInUp 0.5s ease-out forwards",
            },
        },
    },
    plugins: [],
};
