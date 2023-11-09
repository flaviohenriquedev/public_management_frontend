/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "media",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'bg-login': 'url("https://images.unsplash.com/photo-1532300481631-0bc14f3b7699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
            }
        },
    },
    daisyui: {
        themes: true
    },
    plugins: [
        require("daisyui"),
        require("tailwind-scrollbar")({ nocompatible: true })
    ]
};
