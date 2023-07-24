import Header from "../components/Header/Header";
import List from "../components/List/List";

export default function ListPage({ customerData }) {
  console.log(customerData);

  return (
    <>
      <Header />
      <List customerData={customerData} />
    </>
  );
}
