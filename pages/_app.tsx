import { AppProps } from "next/app";
import "../styles/index.scss";
import ThemeProvider from "../providers/ThemeProvider";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jeremy Hon - Software Engineer</title>
        <meta
          name="description"
          content="Hi, I'm a full-stack engineer currently based in London"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
