/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        colors: {
            "darkBlue" : "#0E172B",
            "blue" : "#39bdf9",
            "red" : "#FF0000",
            "black" : "#000000",
            "lightBlack" : "#0E172A",
            "text" : "#334155",
            "white" : "#FFFFFF",
            "border" : "#C6C6C6",
            "borderLight" : "#ECEEEF",
            "yellow" : "#FFC207"
        },
        screens: {
            "full": {"max": "1580px"},
            "desktop": {"max": "1440px"},
            "laptop-lg": {"max": "1280px"},
            "laptop": {"max": "1199px"},
            "tablet-lg": {"max": "1024px"},
            "tablet": {"max": "991px"},
            "mobile-lg": {"max": "767px"},
            "mobile": {"max": "479px"},
        },
        extend: {
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"]
            }
        }
    },
    plugins: [],
}