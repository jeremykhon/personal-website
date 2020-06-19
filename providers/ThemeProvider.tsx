import { useState, createContext, SetStateAction } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: React.Dispatch<SetStateAction<string>>;
}

export const ThemeContext = createContext<Partial<ThemeContextProps>>({});

const ThemeProvider: React.FC = (props) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
