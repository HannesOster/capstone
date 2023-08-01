import Header from "../../../components/Header/Header";
import {
  CustomerFormInput,
  Form,
  FormButton,
} from "../../../page-styles/styles";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function AddCustomer() {
  const router = useRouter();
  const { mutate } = useSWR("/api/customers");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const withoutDepositCustomer = Object.fromEntries(formData);
    const customer = { ...withoutDepositCustomer, boxes: 0, buckets: 0 };
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
        <label htmlFor="plz">Postleitzahl:</label>
        <CustomerFormInput
          id="plz"
          name="plz"
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
