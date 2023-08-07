import { Button, Container } from "../Buttons/styles";

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
      <Button size="s" onClick={() => handleOpenGoogleMaps(customer)}>
        Navigation
      </Button>
    </Container>
  );
}
