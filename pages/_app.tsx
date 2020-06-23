import { AppProps } from "next/app";
import "../styles/global/index.scss";
import ThemeProvider from "../providers/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
