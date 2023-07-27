import GlobalStyle, { theme } from "../styles";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { useState } from "react";

import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);

  const boxesToAdd = boxes[0] - boxes[1];
  const bucketsToAdd = buckets[0] - buckets[1];

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
            <title>Capstone Project</title>
          </Head>
          <Component
            boxes={boxes}
            buckets={buckets}
            setBoxes={setBoxes}
            setBuckets={setBuckets}
            boxesToAdd={boxesToAdd}
            bucketsToAdd={bucketsToAdd}
            {...pageProps}
          />
          <Navigation />
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
