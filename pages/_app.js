import GlobalStyle, { theme } from "../styles";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SWRConfig
          value={{
            fetcher: async (...args) => {
              const response = await fetch(...args);
              if (!response.ok) {
                throw new Error(`Request with ${JSON.stringify(args)} failed.`);
              }
              return await response.json();
            },
          }}
        >
          <GlobalStyle />
          <Head>
            <title>Pfand App Osterkamp</title>
          </Head>

          <Component {...pageProps} />
          <Navigation />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
