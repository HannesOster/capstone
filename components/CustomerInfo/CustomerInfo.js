import React, { useState } from "react";

export default function CustomerInfo({ customer, id }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleArrowClick() {
    setIsExpanded(!isExpanded);
  }
  function editCustomerInfo(id) {}

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
          <p>Kundeninformation: {customer.info} </p>
          <button>Kundeninfo hinzufügen</button>
        </>
      )}
    </div>
  );
}
