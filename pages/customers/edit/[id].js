import Header from "../../../components/Header/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Form, Input } from "../../../page-styles/styles";
import { Button } from "../../../components/Buttons/styles";

export default function EditCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const { data: customer, mutate } = useSWR(`/api/customers/${id}`);

  async function handleEditSubmit(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData);

    const response = await fetch(`/api/customers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(customer),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return;
    }
    mutate();

    event.target.reset();
    router.push("/");
  }
  return (
    <>
      <Header />
      <Form onSubmit={(event) => handleEditSubmit(event, id)}>
        <label htmlFor="name">Kundenname:</label>
        <Input
          id="name"
          defaultValue={customer ? customer.name : ""}
          name="name"
          type="text"
          required
        />
        <label htmlFor="street">Straße und Hausnummer:</label>
        <Input
          defaultValue={customer ? customer.street : ""}
          id="street"
          name="street"
          type="text"
          required
        />
        <label htmlFor="location">Ort:</label>
        <Input
          id="location"
          defaultValue={customer ? customer.location : ""}
          name="location"
          type="text"
          required
        />
        <label htmlFor="areaCode">Postleitzahl:</label>
        <Input
          defaultValue={customer ? customer.areaCode : ""}
          id="areaCode"
          name="areaCode"
          type="text"
          minLength="5"
          maxLength="5"
          pattern="[0-9]{5}"
          required
        />
        <div style={{ height: 20 }} />
        <Button size="m" type="submit">
          Bestätigen
        </Button>
      </Form>
    </>
  );
}
