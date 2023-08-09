import { useRouter } from "next/router";
import useSWR from "swr";
import { geocodeAddress, removeSpaces } from "../add";
import Form from "../../../components/Form/Form";
import { useState } from "react";
import { Container, ErrorIcon, ErrorModal } from "../../../page-styles/styles";

export default function EditCustomer({ setShowSuccessModal }) {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data: customer, mutate } = useSWR(`/api/customers/${id}`);

  async function handleEditSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const unformattedCustomer = Object.fromEntries(formData);
    const { street, location, areaCode } = unformattedCustomer;
    const geoData = await geocodeAddress(`${street}, ${location}, ${areaCode}`);

    if (!geoData || !geoData[0] || !geoData[0].lat) {
      setShowModal(true);
      return;
    }
    const { lat, lon } = geoData[0];
    const customer = {
      ...unformattedCustomer,
      name: removeSpaces(event.target.name.value.toUpperCase()),
      lat: lat,
      lon: lon,
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
    setShowSuccessModal(true);
  }
  return (
    <>
      <Form handleSubmit={handleEditSubmit} customer={customer} />
      <Container>
        {" "}
        <ErrorModal isActive={showModal}>
          <ErrorIcon />
          <p>Adresse kann nicht zugeordnet werden!</p>
        </ErrorModal>
      </Container>
    </>
  );
}
