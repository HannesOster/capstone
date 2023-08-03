import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import dynamic from "next/dynamic";
import useSWR from "swr";
import Header from "../../../components/Header/Header";

const Map = dynamic(() => import("../../../components/Map"), { ssr: false });

export default function CustomerMap() {
  const { data, error, isLoading } = useSWR("/api/customers", {
    initialData: [],
    revalidateOnMount: true,
  });
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const markers = data.map((customer) => {
    return {
      id: customer._id,
      name: customer.name,
      lat: customer.lat,
      long: customer.lon,
      boxes: customer.boxes,
    };
  });
  console.log(markers);
  return (
    <>
      <Header />
      <Map markers={markers} />
    </>
  );
}
