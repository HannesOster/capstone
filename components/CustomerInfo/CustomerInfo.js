import { useState } from "react";
import useSWR from "swr";
import { Button, CancelIcon, SaveIcon } from "../Buttons/styles";
import ReactModal from "react-modal";
import {
  CustomerInfoInput,
  InfoText,
  InfoContainer,
  CustomerInfoForm,
  CustomerInfoButtonContainer,
  Placeholder,
  InfoModalStyle,
  InfoParagraph,
  InfoParagraphContainer,
} from "./styles";
import Upload from "../ImageUpload/ImageUpload";

export default function CustomerInfo({ customer, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate } = useSWR(`/api/customers/${id}`);

  function handleArrowClick() {
    setIsExpanded(!isExpanded);
  }

  async function editCustomerInfo(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData);

    const response = await fetch(`/api/customers/${id}`, {
      method: "PATCH",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    setIsModalOpen(false);
    mutate();
  }

  return (
    <section>
      <InfoContainer>
        <span>Kundeninformation</span>
        <InfoText onClick={handleArrowClick}>{isExpanded ? "▼" : "▶"}</InfoText>
      </InfoContainer>
      {isExpanded && (
        <InfoParagraphContainer>
          <InfoParagraph>
            {customer.info ? customer.info : "Kundeninfo hinzufügen!"}
          </InfoParagraph>
          <Button size="m" onClick={() => setIsModalOpen(true)}>
            Kundeninfo bearbeiten
          </Button>
          <Upload customer={customer} id={id} mutate={mutate} />
        </InfoParagraphContainer>
      )}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Kundeninfo bearbeiten"
        style={InfoModalStyle}
      >
        <CustomerInfoForm onSubmit={(event) => editCustomerInfo(event)}>
          <CustomerInfoInput
            type="text"
            minLength="10"
            rows="30"
            name="info"
            id="info"
            defaultValue={customer.info || ""}
          />
          <CustomerInfoButtonContainer>
            <Button
              size="s"
              variant="danger"
              onClick={() => setIsModalOpen(false)}
            >
              <CancelIcon /> Abbrechen
            </Button>
            <Button size="s" variant="success" type="submit">
              <SaveIcon />
              Speichern
            </Button>
          </CustomerInfoButtonContainer>
        </CustomerInfoForm>
      </ReactModal>
      <Placeholder />
    </section>
  );
}
