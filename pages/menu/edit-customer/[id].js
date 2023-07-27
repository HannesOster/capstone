import Header from "../../../components/Header/Header";
import { Form, FormButton } from "../../../pagestyles/styles";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function EditCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const { mutate } = useSWR("/api");

  async function handleEditSubmit(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData);
    console.log(id);
    const response = await fetch(`/api/${id}`, {
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
