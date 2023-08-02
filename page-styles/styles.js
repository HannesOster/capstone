import styled from "styled-components";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
};

const Form = styled.form`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  width: 90%;
  line-height: 30px;
  margin-left: 20px;
  align-items: center;
`;
const CustomerFormInput = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  outline: none;
  background-color: ${(props) => props.theme.third};
`;

const FormButton = styled.button`
  margin-top: 30px;
  color: ${(props) => props.theme.sixth};
  background-color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  background: linear-gradient(to right, #ffc700, #ffa500);
  border-radius: 10px;
  text-align: center;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background: linear-gradient(to right, #ffa500, #ffd700);
    transform: scale(1.05);
  }
`;

const StockContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ModalCloseButton = styled.button`
  color: ${(props) => props.theme.third};
  background-color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: auto;
  padding: 5px 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.third};
    border: 3px ${(props) => props.theme.secondary} solid;
    color: ${(props) => props.theme.secondary};
  }
`;

export {
  CustomerFormInput,
  Form,
  FormButton,
  StockContainer,
  ModalCloseButton,
  modalStyles,
};
