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
          content="Hi, I'm a full-stack software engineer from Hong Kong currently based in Tokyo, Japan"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
