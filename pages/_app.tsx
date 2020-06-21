import { AppProps } from "next/app";
import "../styles/global/index.scss";
import ThemeProvider from "../providers/ThemeProvider";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider>
        <div className="container">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
