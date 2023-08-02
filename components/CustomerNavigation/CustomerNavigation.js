import { Container } from "../Buttons/styles";
import { EditButton } from "../CustomerInfo/styles";

function getGoogleMapsLink(customer) {
  const { street, location, areaCode } = customer;
  const address = `${street}, ${location}, ${areaCode}`;
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}
export default function CustomerNavigation({ customer }) {
  const googleMapsLink = getGoogleMapsLink(customer);

  function handleOpenGoogleMaps() {
    window.open(googleMapsLink, "_blank");
  }

  return (
    <Container>
      <EditButton onClick={() => handleOpenGoogleMaps(customer)}>
        Navigation
      </EditButton>
    </Container>
  );
}
