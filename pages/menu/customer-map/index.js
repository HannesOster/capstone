import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Map from "../../../components/Map";
import useSWR from "swr";

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
  return <Map markers={markers} />;
}
