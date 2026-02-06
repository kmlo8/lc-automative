import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-manrope)"],
            },
            colors: {
                luxury: {
                    black: "#050505",
                    gray: "#121212",
                    border: "#262626"
                }
            }
        },
    },
    plugins: [],
};
export default config;