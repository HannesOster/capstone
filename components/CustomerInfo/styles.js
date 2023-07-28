import styled from "styled-components";

const CustomerInfoInput = styled.textarea`
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
`;
const Placeholder = styled.div`
  margin-bottom: 130px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: center;
  border-bottom: 3px solid ${(props) => props.theme.fifth};
  border-top: 3px solid ${(props) => props.theme.fifth};
`;

const InfoText = styled.span`
  margin-left: 5px;
  cursor: pointer;

  padding: 10px;
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
  margin-bottom: 130px;
`;

const InfoParagraph = styled.p`
  background-color: ${(props) => props.theme.fifth};
  padding: 20px;
  width: 80%;
  border-radius: 10px;
`;

const InfoParagraphContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const InfoModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    height: "620px",
  },
};
export {
  CustomerInfoInput,
  InfoText,
  InfoContainer,
  CustomerInfoForm,
  CustomerInfoButtonContainer,
  Placeholder,
  InfoModalStyle,
  InfoParagraph,
  InfoParagraphContainer,
};
