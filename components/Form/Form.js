import { FormContainer, FormStyle, Input } from "../../page-styles/styles";
import { Button } from "../Buttons/styles";
import Header from "../Header/Header";

export default function Form({ onSubmit, customer }) {
  return (
    <>
      <Header />
      <FormContainer>
        <FormStyle
          onSubmit={(event) => onSubmit(event, customer && customer.id)}
        >
          <label htmlFor="name">Kundenname:</label>
          <Input
            id="name"
            maxLength="7"
            name="name"
            type="text"
            required
            defaultValue={customer ? customer.name : ""}
          />

          <label htmlFor="street">Straße und Hausnummer:</label>
          <Input
            id="street"
            name="street"
            type="text"
            required
            defaultValue={customer ? customer.street : ""}
          />

          <label htmlFor="location">Ort:</label>
          <Input
            id="location"
            name="location"
            type="text"
            required
            defaultValue={customer ? customer.location : ""}
          />

          <label htmlFor="areaCode">Postleitzahl:</label>
          <Input
            id="areaCode"
            name="areaCode"
            type="text"
            maxLength="5"
            pattern="[0-9]{5}"
            required
            defaultValue={customer ? customer.areaCode : ""}
          />
          <div style={{ height: 20 }} />

          <Button size="m" type="submit">
            Bestätigen
          </Button>
        </FormStyle>
      </FormContainer>
    </>
  );
}
