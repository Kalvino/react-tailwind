/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '5/6': '83.3333333%'
      }
    },
    customForms: theme => ({
      default: {
        'select, radio, checkbox': {
          borderColor: 'transparent',
          lineHeight: theme('lineHeight.snug'),
          iconColor: theme('colors.white'),
        },
        'select, checkbox': {
          borderRadius: theme('borderRadius.lg'),
        },
        select: {
          backgroundColor: theme('colors.gray.700'),
        },
        'checkbox, radio': {
          height: '1.5em',
          width: '1.5em',
          backgroundColor: theme('colors.gray.900'),
          checkedColor: theme('colors.indigo.500'),
          color: theme('colors.indigo.500'),
        }
      }
    })
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}

