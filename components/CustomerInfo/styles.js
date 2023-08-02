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
  margin: 30px 0 130px;
  gap: 50px;
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

const EditButton = styled.button`
  margin-top: 30px;
  color: ${(props) => props.theme.third};
  background-color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: 60%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1.2rem;
  background: linear-gradient(to right, #ffc700, #ffa500);
  color: ${(props) => props.theme.sixth};
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: linear-gradient(to right, #ffa500, #ffd700);
    transform: scale(1.05);
  }
`;

const InfoModalStyle = {
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
  EditButton,
};
