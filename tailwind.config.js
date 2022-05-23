module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        corporate: {
          "primary": "#2563eb",
          "secondary": "#fb7185",
          "accent": "#9586e0",
          "neutral": "#d8b4fe",
          "base-100": "#e5e7eb",
          "info": "#45ABC4",
          "success": "#14665B",
          "warning": "#E69E19",
          "error": "#F33F6F",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem", 
          "--rounded-badge": "1.9rem", 
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s", 
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
