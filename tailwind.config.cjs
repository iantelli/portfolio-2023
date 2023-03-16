/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Inter", "sans-serif"],
                body: ["JetBrains Mono", "monospace"],
            },
            colors: {
                rosePine: {
                    base: "#191724",
                    surface: "#1f1d2e",
                    overlay: "#26233a",
                    muted: "#6e6a86",
                    subtle: "#908caa",
                    text: "#e0def4",
                    love: "#eb6f92",
                    gold: "#f6c177",
                    rose: "#ebbcba",
                    pine: "#31748f",
                    foam: "#9ccfd8",
                    iris: "#c4a7e7",
                    highlightLow: "#21202e",
                    highlightMed: "#403d52",
                    highlightHigh: "#524f67",
                },
                rosePineDawn: {
                    base: "#faf4ed",
                    surface: "#fffaf3",
                    overlay: "#f2e9e1",
                    muted: "#9893a5",
                    subtle: "#797593",
                    text: "#575279",
                    love: "#b4637a",
                    gold: "#ea9d34",
                    rose: "#d7827e",
                    pine: "#286983",
                    foam: "#56949f",
                    iris: "#907aa9",
                    highlightLow: "#f4ede8",
                    highlightMed: "#dfdad9",
                    highlightHigh: "#cecacd",
                },
                sayaka: {
                    base: "#262b37",
                    dark: "#253554",
                    light: "#4e668b",
                    text: "#e5e5e5",
                    accent: "#ffd7df",
                }
            },
        },
    },
    plugins: [],
};
