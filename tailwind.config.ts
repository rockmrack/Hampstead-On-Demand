import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Hampstead Renovations Color Scheme
        primary: {
          DEFAULT: "#2c3e50",
          light: "#546e7a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#8b7355",
          light: "#a0896d",
          foreground: "#ffffff",
        },
        dark: "#1a252f",
        grey: {
          DEFAULT: "#607d8b",
          light: "#f5f7f9",
        },
        text: "#37474f",
        // Keep shadcn compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#8b7355",
        background: "#ffffff",
        foreground: "#37474f",
        secondary: {
          DEFAULT: "#546e7a",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#f5f7f9",
          foreground: "#607d8b",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#37474f",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#37474f",
        },
      },
      fontFamily: {
        heading: ['"Libre Baskerville"', 'Georgia', 'serif'],
        body: ['"Source Sans 3"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
        "2xl": "6rem",
      },
      borderRadius: {
        lg: "12px",
        md: "10px",
        sm: "6px",
      },
      boxShadow: {
        DEFAULT: "0 4px 20px rgba(0,0,0,0.08)",
        hover: "0 8px 30px rgba(0,0,0,0.12)",
        premium: "0 10px 40px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideIn: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: "slideIn 0.4s ease",
        rotate: "rotate 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
