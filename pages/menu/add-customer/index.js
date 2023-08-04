import Header from "../../../components/Header/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  CustomerFormInput,
  Form,
  FormButton,
} from "../../../page-styles/styles";

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
  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Kundenname:</label>
        <CustomerFormInput id="name" maxLength="7" name="name" type="text" />
        <label htmlFor="street">Straße und Hausnummer:</label>
        <CustomerFormInput id="street" name="street" type="text" />
        <label htmlFor="location">Ort:</label>
        <CustomerFormInput id="location" name="location" type="text" />
        <label htmlFor="areaCode">Postleitzahl:</label>
        <CustomerFormInput
          id="areaCode"
          name="areaCode"
          type="text"
          minLength="5"
          maxLength="5"
          pattern="[0-9]{5}"
        />
        <FormButton type="submit">Bestätigen</FormButton>
      </Form>
    </>
  );
}
