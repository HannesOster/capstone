import GlobalStyle, { theme } from "../styles";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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

          <Component
            showSuccessModal={showSuccessModal}
            setShowSuccessModal={setShowSuccessModal}
            {...pageProps}
          />
          <Navigation />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
