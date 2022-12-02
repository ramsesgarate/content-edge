import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'

export default defineConfig({
  plugins: [
    require('windicss/plugin/forms'),
    require('windicss/plugin/line-clamp'),
    typography({
      dark: true,
    }),
  ],
  theme: {
    extend: {
      lineClamp: {
        sm: '3',
        lg: '10',
      },
      animation: {
        fadeIn: 'fadeIn 200ms ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        header: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            maxWidth: '100%',
            lineHeight: 1.3,
            img: {
              height: null,
            },
            a: {
              color: 'inherit',
              fontWeight: 400,
              textDecoration: 'none',
            },
            h1: {
              color: theme('colors.black'),
              fontWeight: '700',
              fontFamily: theme('fontFamily.header'),
              lineHeight: 1.3,
            },
            h2: {
              color: theme('colors.black'),
              fontFamily: theme('fontFamily.header'),
            },
            h3: {
              color: theme('colors.black'),
              fontFamily: theme('fontFamily.header'),
            },
            h4: {
              color: theme('colors.black'),
              fontWeight: '600',
              fontSize: '1.5rem',
              lineHeight: '2rem',
              fontFamily: theme('fontFamily.header'),
              textDecoration: 'underline',
            },
            blockquote: {
              fontWeight: '400',
            },
          },
        },
        xl: {
          css: {
            h1: {
              lineHeight: 1.3,
            },
          },
        },
      }),
    },
  },
})