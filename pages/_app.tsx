import { AppProps } from "next/app";
import "../styles/global/index.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useState } from "react";

interface GlobalStyleProps {
  theme: {
    main: string;
    text: string;
  };
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  body {
    background-color: ${(props) => props.theme.main};
  }
`;

const lightTheme = {
  name: "light",
  main: "white",
  text: "green",
};

const darkTheme = {
  name: "dark",
  main: "black",
  text: "blue",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    if (theme.name === "light") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <button onClick={toggleTheme}>Button</button>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
