import styled from "styled-components";

const CustomerInfoInput = styled.textarea`
  width: 90%;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;

export { InfoSubmitButton, CustomerInfoInput, InfoText, InfoContainer };
