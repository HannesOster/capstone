import styled from "styled-components";

const CustomerInfoInput = styled.textarea`
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const InfoText = styled.span`
  margin-left: 5px;
  cursor: pointer;
`;
const CustomerInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  line-height: 30px;
  margin-left: 20px;
  align-items: center;
`;
const CustomerInfoButtonContainer = styled.section`
  display: flex;
  margin-top: 30px;
  gap: 50px;
`;
export {
  CustomerInfoInput,
  InfoText,
  InfoContainer,
  CustomerInfoForm,
  CustomerInfoButtonContainer,
};
