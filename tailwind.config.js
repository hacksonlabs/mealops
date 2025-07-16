module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep navy for enterprise trust
        primary: {
          DEFAULT: "#1B365D", // Deep navy - Enterprise trust with athletic team depth
          50: "#F0F4F8", // Very light navy tint - slate-50
          100: "#D6E3F0", // Light navy tint - slate-100
          200: "#B8CCE0", // Medium light navy - slate-200
          300: "#9BB5D0", // Medium navy - slate-300
          400: "#7D9EC0", // Medium dark navy - slate-400
          500: "#5F87B0", // Base navy variant - slate-500
          600: "#4A6B8A", // Darker navy - slate-600
          700: "#354F64", // Deep navy variant - slate-700
          800: "#1B365D", // Primary navy - slate-800
          900: "#0F1E2E", // Darkest navy - slate-900
        },
        
        // Secondary Colors - Energetic orange for action
        secondary: {
          DEFAULT: "#FF6B35", // Appetite appeal and confident action - orange-500
          50: "#FFF4F0", // Very light orange tint - orange-50
          100: "#FFE4D6", // Light orange tint - orange-100
          200: "#FFCFB8", // Medium light orange - orange-200
          300: "#FFB99A", // Medium orange - orange-300
          400: "#FFA47C", // Medium dark orange - orange-400
          500: "#FF8F5E", // Base orange variant - orange-500
          600: "#FF6B35", // Primary orange - orange-600
          700: "#E55A2B", // Darker orange - orange-700
          800: "#CC4921", // Deep orange - orange-800
          900: "#B33817", // Darkest orange - orange-900
        },

        // Accent Colors - Success green
        accent: {
          DEFAULT: "#2ECC71", // Success states and positive outcomes - emerald-500
          50: "#ECFDF5", // Very light green tint - emerald-50
          100: "#D1FAE5", // Light green tint - emerald-100
          200: "#A7F3D0", // Medium light green - emerald-200
          300: "#6EE7B7", // Medium green - emerald-300
          400: "#34D399", // Medium dark green - emerald-400
          500: "#2ECC71", // Primary accent green - emerald-500
          600: "#059669", // Darker green - emerald-600
          700: "#047857", // Deep green - emerald-700
          800: "#065F46", // Very deep green - emerald-800
          900: "#064E3B", // Darkest green - emerald-900
        },

        // Background Colors
        background: "#FAFBFC", // Clean canvas for complex information - slate-50
        surface: "#F8F9FA", // Subtle card depth without distraction - gray-50

        // Text Colors
        text: {
          primary: "#2C3E50", // Extended reading comfort and professionalism - slate-700
          secondary: "#6C757D", // Clear hierarchy without harsh contrast - gray-500
        },

        // Status Colors
        success: "#27AE60", // Positive reinforcement and completion states - green-600
        warning: "#F39C12", // Attention without alarm for important notices - amber-500
        error: "#E74C3C", // Clear problem indication with helpful tone - red-500

        // Border Colors
        border: {
          DEFAULT: "#E5E7EB", // Minimal borders for structure - gray-200
          light: "#F3F4F6", // Very light borders - gray-100
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      
      transitionDuration: {
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'smooth': 'ease-out',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}