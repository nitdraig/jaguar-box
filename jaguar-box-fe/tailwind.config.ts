import type { Config } from 'tailwindcss';
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
fontSize: {
  sm: '0.750rem',
  base: '1rem',
  xl: '1.333rem',
  '2xl': '1.777rem',
  '3xl': '2.369rem',
  '4xl': '3.158rem',
  '5xl': '4.210rem',
},

fontWeight: {
  normal: '400',
  bold: '700',
},
   
  plugins: [nextui()],
}
export default config
