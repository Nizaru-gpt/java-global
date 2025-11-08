/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true, padding: '2rem' },
    extend: {
      maxWidth: {
        'page': '1140px'   // container sesuai look desktop desain
      },
      colors: {
        brand: { orange: '#f59e0b', dark: '#0b0b0b' }
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: { card: '0 8px 30px rgba(0,0,0,0.12)' },
      letterSpacing: {
        tightish: '-0.01em'
      }
    }
  },
  plugins: [] // kosongin biar gak error plugin
}
