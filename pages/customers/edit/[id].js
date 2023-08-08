import { useRouter } from "next/router";
import useSWR from "swr";
import { removeSpaces } from "../add";
import Form from "../../../components/Form/Form";

export default function EditCustomer() {
  const router = useRouter();
  const { id } = router.query;
  const { data: customer, mutate } = useSWR(`/api/customers/${id}`);

  async function handleEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const unformattedCustomer = Object.fromEntries(formData);
    const customer = {
      ...unformattedCustomer,
      name: removeSpaces(event.target.name.value.toUpperCase()),
    };

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
  return <Form onSubmit={handleEditSubmit} customer={customer} />;
}
