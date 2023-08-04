import styled from "styled-components";

export const CustomerInfoInput = styled.textarea`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
`;
export const Placeholder = styled.div`
  margin-bottom: 130px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid ${(props) => props.theme.fifth};
  border-top: 3px solid ${(props) => props.theme.fifth};
`;
export const InfoText = styled.span`
  margin-left: 5px;
  cursor: pointer;
  padding: 10px;
`;
export const CustomerInfoForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  line-height: 30px;
  margin-left: 20px;
  align-items: center;
`;
export const CustomerInfoButtonContainer = styled.section`
  display: flex;
  margin: 30px 0 130px;
  gap: 50px;
`;

export const InfoParagraph = styled.p`
  background-color: ${(props) => props.theme.fifth};
  padding: 20px;
  width: 80%;
  border-radius: 10px;
`;

export const InfoParagraphContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InfoModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    height: "620px",
  },
};
