/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colors from chem-kit.com reference
        brand: {
          // Primary background colors from reference
          light: "#F4F5FA", // Main background color
          secondary: "#DADEEF", // Carousel/hero background
          white: "#FFFFFF", // Pure white for cards

          // Text colors
          text: {
            primary: "#000000", // Black text from reference
            secondary: "#2d3748", // Dark gray
            muted: "#4a5568", // Medium gray
            light: "#718096", // Light gray
          },

          // Accent colors
          blue: {
            50: "#e6f3ff",
            100: "#cce7ff",
            200: "#99cfff",
            300: "#66b7ff",
            400: "#339fff",
            500: "#5a67d8", // Primary blue accent
            600: "#4c51bf",
            700: "#434190",
            800: "#3a3161",
            900: "#312142",
          },

          // Border and subtle colors
          border: {
            light: "#e2e8f0", // Light borders
            medium: "#cbd5e0", // Medium borders
            dark: "#a0aec0", // Dark borders
          },

          // Warning/Alert colors (from PERINGATAN section)
          warning: {
            bg: "#fed7d7", // Light red background
            border: "#f56565", // Red border
            text: "#c53030", // Red text
          },
        },

        // Keep compatibility with existing color scheme
        primary: {
          50: "#e6f3ff",
          100: "#cce7ff",
          200: "#99cfff",
          300: "#66b7ff",
          400: "#339fff",
          500: "#5a67d8",
          600: "#4c51bf",
          700: "#434190",
          800: "#3a3161",
          900: "#312142",
        },
        secondary: {
          50: "#f7fafc",
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0",
          400: "#a0aec0",
          500: "#718096",
          600: "#4a5568",
          700: "#2d3748",
          800: "#1a202c",
          900: "#171923",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        // Add the helv-font family used in reference
        helv: ["Helvetica", "Arial", "sans-serif"],
      },
      fontSize: {
        // Text sizes based on reference CSS
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px (cssSubnavText)
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
      },
      spacing: {
        // Spacing values based on reference layout
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        100: "25rem", // 400px
        104: "26rem", // 416px
        112: "28rem", // 448px
        128: "32rem", // 512px
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "float-delayed-2": "float 6s ease-in-out infinite 4s",
        "carousel-fade": "carousel-fade 1s ease-in-out",
        "slide-fade": "slide-fade 4s ease-in-out infinite",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "fade-in-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "carousel-fade": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-fade": {
          "0%": {
            opacity: "1",
          },
          "25%": {
            opacity: "0.8",
          },
          "50%": {
            opacity: "1",
          },
          "75%": {
            opacity: "0.8",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.1)",
        medium: "0 20px 40px rgba(0, 0, 0, 0.15)",
        brand: "0 25px 50px -12px rgba(90, 103, 216, 0.25)",
        // Define the shadow-card classes that were causing errors
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        xl: "0.75rem", // 12px
        "2xl": "1rem", // 16px
        "3xl": "1.5rem", // 24px
        "4xl": "2rem", // 32px
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "reference-gradient":
          "linear-gradient(135deg, #F4F5FA 0%, #DADEEF 50%, #F4F5FA 100%)",
        "hero-pattern": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },
      letterSpacing: {
        wider: "0.05em",
        widest: "0.1em",
        "extra-wide": "0.15em",
      },
    },
  },
  plugins: [],
  // Safelist classes that might be used dynamically
  safelist: [
    "shadow-card",
    "shadow-card-hover",
    "hover:shadow-card-hover",
    "bg-brand-light",
    "bg-brand-secondary",
    "text-brand-text-primary",
  ],
};
