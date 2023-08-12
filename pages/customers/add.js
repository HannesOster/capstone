import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import Form from "../../components/Form/Form";
import { Container, ErrorModal, ErrorIcon } from "../../page-styles/styles";
import { routes } from "../../utils/routes";

export function removeSpaces(inputString) {
  return inputString.replace(/\s/g, "");
}

export async function geocodeAddress(address) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${address}&format=json`
  );
  const data = await response.json();
  return data;
}

export default function AddCustomer({ setShowSuccessModal }) {
  const router = useRouter();
  const { mutate } = useSWR(routes.customersApiRoute);

  const [showModal, setShowModal] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const withoutDepositCustomer = Object.fromEntries(formData);
    const { street, location, areaCode } = withoutDepositCustomer;
    const geoData = await geocodeAddress(`${street}, ${location}, ${areaCode}`);
    console.log(geoData);
    if (!geoData || !geoData[0] || !geoData[0].lat) {
      setShowModal(true);
    }

    if (geoData && geoData[0] && geoData[0].lat && geoData[0].lon) {
      const { lat, lon } = geoData[0];
      const customer = {
        ...withoutDepositCustomer,
        lat: lat,
        lon: lon,
        boxes: 0,
        buckets: 0,
        attachments: 0,
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
        setShowModal(true);
      } else {
        setShowModal(false);
        mutate();
        event.target.reset();
        router.push("/");
        setShowSuccessModal(true);
      }
    }
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
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
