module.exports = {
  content: ['./dist/*.html'],
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
