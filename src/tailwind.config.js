const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    filters: {
      none: "none",
      grayscale: "grayscale(1)",
      invert: "invert(1)",
      sepia: "sepia(1)",
    },
    extend: {},
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    textDecoration: ["responsive", "hover", "focus", "active"],
  },
  plugins: [],
};
