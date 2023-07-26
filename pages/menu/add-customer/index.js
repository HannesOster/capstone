import { GreenButton } from "../../../components/Buttons/styles";
import Header from "../../../components/Header/Header";
import { Form, FormButton } from "../../../pagestyles/styles";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function AddCustomer() {
  const router = useRouter();
  const { mutate } = useSWR("/api");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const withoutDepositCustomer = Object.fromEntries(formData);
    const customer = { ...withoutDepositCustomer, boxes: 0, buckets: 0 };
    const response = await fetch(`/api`, {
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

    e.target.reset();
    router.push("/");
  }
  return (
    <>
      <Header />
      <Form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Kundenname:</label>
        <input id="name" name="name" type="text" />
        <label htmlFor="street">Straße und Hausnummer:</label>
        <input id="street" name="street" type="text" />
        <label htmlFor="location">Ort:</label>
        <input id="location" name="location" type="text" />
        <label htmlFor="plz">Postleitzahl:</label>
        <input
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
