import { useRouter } from "next/router";
import useSWR from "swr";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import Header from "../../components/Header/Header";
import AddDeposit from "../../components/AddDeposit/AddDeposit";
import Counters from "../../components/Counters/Counters";
import ButtonContainer from "../../components/Buttons/ButtonContainer";
import CustomerInfo from "../../components/CustomerInfo/CustomerInfo";
import Upload from "../../components/ImageUpload/ImageUpload";

export default function Deposit({
  setBoxes,
  setBuckets,
  boxesToAdd,
  bucketsToAdd,
  boxes,
  buckets,
  setCustomerData,
  handleSave,
}) {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: customer,
    isLoading,
    error,
    mutate,
  } = useSWR(`/api/customers/${id}`);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <Header />
      <AddDeposit customer={customer} />
      <Counters
        boxes={boxes}
        buckets={buckets}
        setBoxes={setBoxes}
        setBuckets={setBuckets}
      />
      <ButtonContainer
        boxesToAdd={boxesToAdd}
        bucketsToAdd={bucketsToAdd}
        id={id}
        setCustomerData={setCustomerData}
        handleSave={handleSave}
        setBoxes={setBoxes}
        setBuckets={setBuckets}
      />
      <CustomerInfo id={id} customer={customer} />
    </>
  );
}
