import { useState, createContext, SetStateAction, useEffect } from "react";

const themeConfig = {
  light: {
    "--initial-theme": "light",
    "--color-bg": "white",
    "--color-text": "#20242C",
    "--color-text-invert": "white",
    "--color-primary": "#4334FF",
    "--color-white": "white",
  },
  dark: {
    "--initial-theme": "dark",
    "--color-bg": "#0F151C",
    "--color-text": "white",
    "--color-text-invert": "#20242C",
    "--color-primary": "#FF0B78",
    "--color-white": "white",
  },
};
interface ThemeContextProps {
  theme: string;
  setTheme: (value: string) => void;
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

const ThemeProvider: React.FC = (props) => {
  const [theme, rawSetTheme] = useState<string | undefined>(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue("--initial-theme");
    rawSetTheme(initialColorValue);
  }, []);

  const setTheme = (value: string) => {
    rawSetTheme(value);

    const config = value === "dark" ? themeConfig.dark : themeConfig.light;
    for (let [key, value] of Object.entries(config)) {
      setCSSVar(key, value);
    }

    function setCSSVar(property: string, value: string) {
      document.documentElement.style.setProperty(property, value);
    }

    window.localStorage.setItem("theme", value);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
