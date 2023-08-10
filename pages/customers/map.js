import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import dynamic from "next/dynamic";
import useSWR from "swr";
import Header from "../../components/Header/Header";
import daysSinceDate from "../../utils/daysSinceDate";

const Map = dynamic(() => import("../../components/Map"), { ssr: false });

export default function CustomerMap() {
  const { data, error, isLoading } = useSWR(routes.customersApiRoute, {
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
    const date = new Date(customer.timestamp);
    const elapsedDays = daysSinceDate(date);
    return {
      id: customer._id,
      name: customer.name,
      lat: customer.lat,
      long: customer.lon,
      boxes: customer.boxes,
      days: elapsedDays,
      customer: customer,
    };
  });

  return (
    <>
      <Header />
      <Map markers={markers} />
    </>
  );
}
