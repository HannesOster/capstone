import Header from "../../../components/Header/Header";
import {
  CustomerFormInput,
  Form,
  FormButton,
} from "../../../page-styles/styles";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const { data: customer, mutate } = useSWR(`/api/customer/${id}`);

  async function handleEditSubmit(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData);
    console.log(id);
    const response = await fetch(`/api/customer/${id}`, {
      method: "PATCH",
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
      <Form onSubmit={(event) => handleEditSubmit(event, id)}>
        <label htmlFor="name">Kundenname:</label>
        <CustomerFormInput
          id="name"
          defaultValue={customer ? customer.name : ""}
          name="name"
          type="text"
          required
        />
        <label htmlFor="street">Straße und Hausnummer:</label>
        <CustomerFormInput
          defaultValue={customer ? customer.street : ""}
          id="street"
          name="street"
          type="text"
        />
        <label htmlFor="location">Ort:</label>
        <CustomerFormInput
          id="location"
          defaultValue={customer ? customer.location : ""}
          name="location"
          type="text"
        />
        <label htmlFor="plz">Postleitzahl:</label>
        <CustomerFormInput
          defaultValue={customer ? customer.plz : ""}
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
