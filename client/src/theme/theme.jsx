/*
  THEME CONVENTION

  <background>: maximum brightness/darkness color value of the palette, little to no saturation.
  <text>: inverse of <background>, little to no saturation.
  <primary>: the next value closer to gray compared to <background>, low saturation.
  <secondary>: the next value closer to gray compared to <primary>, mid saturation.
  <tertiary>: the next vlaue closer to gray compared to <secondary>, high saturation.
  <accent>: the most colorful, saturated and bright color for details, highest saturation.
*/

export const theme = {
  light: {
    name: "light",
    colors: {
      background: "rgb(245, 235, 228)",
      text: "rgb(51, 51, 51)",
      grayed: "rgba(150, 137, 137, 0.4)",
      primary: "rgb(247, 222, 213)",
      secondary: "rgb(246, 205, 197)",
      tertiary: "rgb(240, 165, 165)",
      accent: "rgb(228, 64, 75)",
    },
    splashScreen: "splash-light.webp",
    tileBackground: "bg-tile-light.png",
  },
  dark: {
    name: "dark",
    colors: {
      background: "rgb(24, 18, 28)",
      text: "rgb(255, 255, 255)",
      grayed: "rgba(128, 128, 136, 0.3)",
      primary: "rgb(40, 30, 53)",
      secondary: "rgb(53, 41, 80)",
      tertiary: "rgb(71, 49, 125)",
      accent: "rgb(160, 133, 255)",
    },
    splashScreen: "splash-dark.webp",
    tileBackground: "bg-tile-dark.png",
  },
};
