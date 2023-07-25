import GlobalStyle from "../styles";
import Head from "next/head";
import Navigation from "../components/Navigation/Navigation";
import { useState } from "react";
import data from "../lib/dummyArray";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [customerData, setCustomerData] = useState(data);

  const [boxes, setBoxes] = useState([0, 0]);
  const [buckets, setBuckets] = useState([0, 0]);

  const boxesToAdd = boxes[0] - boxes[1];
  const bucketsToAdd = buckets[0] - buckets[1];

  function handleSave(id, bucketsToAdd, boxesToAdd) {
    setCustomerData((prevCustomerData) =>
      prevCustomerData.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              boxes: customer.boxes + parseInt(boxesToAdd, 10),
              buckets: customer.buckets + parseInt(bucketsToAdd, 10),
            }
          : customer
      )
    );
    router.push("/list-page");
  }
  return (
    <>
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
        customerData={customerData}
        handleSave={handleSave}
        {...pageProps}
      />
      <Navigation />
    </>
  );
}
