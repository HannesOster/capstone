import Header from "../../components/Header/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { FormStyle, FormContainer, Input } from "../../page-styles/styles";
import { Button } from "../../components/Buttons/styles";
import { Placeholder } from "../../components/CustomerInfo/styles";
import Form from "../../components/Form/Form";

export function removeSpaces(inputString) {
  return inputString.replace(/\s/g, "");
}
async function geocodeAddress(address) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
  );
  const data = await response.json();
  return data;
}

export default function AddCustomer() {
  const router = useRouter();
  const { mutate } = useSWR("/api/customers");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const withoutDepositCustomer = Object.fromEntries(formData);
    const { street, location, areaCode } = withoutDepositCustomer;
    const geoData = await geocodeAddress(`${street}, ${location}, ${areaCode}`);
    const { lat, lon } = geoData[0];
    const customer = {
      ...withoutDepositCustomer,
      lat: lat,
      lon: lon,
      boxes: 0,
      buckets: 0,
      name: removeSpaces(event.target.name.value.toUpperCase()),
    };
    const response = await fetch(`/api/customers`, {
      method: "POST",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(response.status);

      return;
    }
    mutate();

    event.target.reset();
    router.push("/");
  }
  return <Form onSubmit={handleSubmit} />;
}
