type Theme = {
  light: {
    primaryColor: string;
    backgroundColor: string;
  };
  dark: {
    primaryColor: string;
    backgroundColor: string;
  };
};

const lightTheme = {
  primaryColor: "#2196F3",
  backgroundColor: "#FFFFFF",
  // Other light mode properties...
};

const darkTheme = {
  primaryColor: "#BB86FC",
  backgroundColor: "#121212",
  // Other dark mode properties...
};

export const themes: Theme = {
  light: lightTheme,
  dark: darkTheme,
};
