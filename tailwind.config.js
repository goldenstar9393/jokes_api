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
                customBlue: '#1860a8'
            },
            fontSize: {
                '24': '24px', // Define your custom font size
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}