import ContextProvider from "@context/ContextProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { theme } from "../theme";

//
// https://nextjs.org/docs/basic-features/layouts
//
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Lounastutka</title>
        <meta content="initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
