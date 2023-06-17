import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../assets/styles";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {
    return;
  },
});

export const ThemeContextProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme);

  useEffect(() => {
    setLocalStorageItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const getStoredTheme = (): ThemeMode => {
  const storedTheme = getLocalStorageItem("theme");
  const theme = storedTheme ?? "light";
  return theme as ThemeMode;
};

export const useTheme = () => useContext(ThemeContext);
