/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    themes: [
      {
        mytheme: {
          "base-100": "#fffef2",
        },
      },
    ],
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      Questrial: ["Questrial", "sans-serif"],
    },
  },
  plugins: [],
};
