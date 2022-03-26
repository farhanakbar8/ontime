module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        wmobile: "296px",
        hmobile: "639px",
      },
      colors: {
        grad1: "#EB86FC",
        grad2: "#3700B3",
        grad3: "#1A001F",
      },
    },
  },
  plugins: [],
};
