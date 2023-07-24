import GlobalStyle from "../styles";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { useState } from "react";
import data from "../lib/dummyArray";

export default function App({ Component, pageProps }) {
  const [customerData, setCustomerData] = useState(data);

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component customerData={customerData} {...pageProps} />
      <Navigation />
    </>
  );
}
