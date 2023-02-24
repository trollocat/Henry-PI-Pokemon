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
      primary: "rgb(244, 224, 215)",
      secondary: "rgb(244, 213, 203)",
      tertiary: "rgb(240, 165, 165)",
      accent: "rgb(228, 64, 75)",
    },
    splashScreen: "splash-light.webp",
  },
  dark: {
    name: "dark",
    colors: {
      background: "rgb(24, 18, 28)",
      text: "rgb(255, 255, 255)",
      primary: "rgb(48, 34, 61)",
      secondary: "rgb(66, 49, 92)",
      tertiary: "rgb(75, 46, 142)",
      accent: "rgb(80, 48, 198)",
    },
    splashScreen: "splash-dark.webp",
  },
};
