import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    // ここ重要: importした変数ではなく、require("daisyui") を直接使います
    plugins: [require("daisyui")],

    daisyui: {
        themes: ["light", "lofi"],
    },
};
export default config;