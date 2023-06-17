// type Theme = {
//   light: {
//     primaryColor: string;
//     backgroundColor: string;
//   };
//   dark: {
//     primaryColor: string;
//     backgroundColor: string;
//   };
// };

const lightTheme = {
  firstColor: "hsl(207, 65%, 65%)",
  titleColor: "hsl(207, 4%, 16%)",
  textColor: "hsl(207, 4%, 28%)",
  textColorLight: "hsl(207, 4%, 56%)",
  bodyColor: "hsl(207, 4%, 99%)",
  containerColor: "hsl(207, 4%, 95%)",
  // Other light mode properties...
};

const darkTheme = {
  titleColor: "hsl(207, 4%, 95%)",
  textColor: "hsl(207, 4%, 65%)",
  bodyColor: "hsl(207, 4%, 10%)",
  containerColor: "hsl(207, 4%, 12%)",
  // Other dark mode properties...
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
