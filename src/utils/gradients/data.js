export const warmColors = ["yellow", "red", "orange"];
export const warmColorsWeights = ["300", "400", "500", "600", "700"];

export const colors = [
  {
    name: "warm",
    color: [
      { from: "yellow", to: "red" },
      { from: "red", to: "yellow" },
      { from: "yellow", to: "gray" },
    ],
  },
  {
    name: "cool",
    color: [
      { from: "blue", to: "indigo" },
      { from: "purple", to: "pink" },
      { from: "indigo", to: "purple" },
    ],
  },
];

export const directions = [
  {
    name: "top",
    direction: "t",
  },
  {
    name: "top right",
    direction: "tr",
  },
  {
    name: "right",
    direction: "r",
  },
  {
    name: "bottom right",
    direction: "br",
  },
  {
    name: "bottom",
    direction: "b",
  },
  {
    name: "bottom left",
    direction: "bl",
  },
  {
    name: "left",
    direction: "l",
  },
  {
    name: "top left",
    direction: "tl",
  },
];
