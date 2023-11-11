module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // more files or globs
  ],
  theme: {
    extend: {
      backgroundImage: {
        'snowflake-pattern': "url('../public/background.png')",
        'candy-cane-pattern': "url('../public/candy-cane-pattern.svg')",
      },
      colors: {
        'brand-teal': '#00a885',
        'brand-purple': '#7c2a90',
        'brand-yellow': '#ffd87d',
        'brand-blue': '#00adef',
        'brand-red': '#d84e43'
      },
      fontFamily: {
        'etna': ['etna', 'sans-serif'],
        'mostra-nuova': ['mostra-nuova', 'sans serif'],
      }
    },
  },
  plugins: [],
}
