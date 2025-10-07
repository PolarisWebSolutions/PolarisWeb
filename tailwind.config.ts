import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        deepNavy: '#1A2332',
        primaryBlue: '#3B82F6',
        primaryGreen: '#10B981',
        accentYellow: '#F59E0B',
        
        // Enhanced text colors for better contrast
        darkGray: '#1F2937',
        mediumGray: '#4B5563',
        lightGray: '#6B7280',
        silver: '#9CA3AF',
        
        // Background colors
        offWhite: '#FAFAFA',
        lightBlue: '#F0F9FF',
        lightGreen: '#F0FDF4',
        
        // Status colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
