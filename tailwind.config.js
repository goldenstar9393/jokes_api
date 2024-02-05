/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                customGreen: '#7ac06e',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}