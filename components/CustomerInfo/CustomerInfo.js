import React, { useState } from "react";
import useSWR from "swr";
import { InfoSubmitButton } from "./styles";
import ReactModal from "react-modal";

export default function CustomerInfo({ customer, id }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate } = useSWR("/api");

  function handleArrowClick() {
    setIsExpanded(!isExpanded);
  }
  async function editCustomerInfo(event, id) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const customer = Object.fromEntries(formData);

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
  }

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span>Kundeninformation</span>
        <span
          style={{ marginLeft: "5px", cursor: "pointer" }}
          onClick={handleArrowClick}
        >
          {isExpanded ? "▼" : "▶"}
        </span>
      </div>
      {isExpanded && (
        <>
          <p>Kundeninfo:{customer.info ? customer.info : ""}</p>
          <form onSubmit={(event) => editCustomerInfo(event, id)}>
            <label>Kundeninfo hinzufügen:</label>
            <input type="text" minLength="10" name="info" id="info" />
            <InfoSubmitButton type="submit">
              Kundeninfo hinzufügen
            </InfoSubmitButton>
          </form>
        </>
      )}
    </div>
  );
}
