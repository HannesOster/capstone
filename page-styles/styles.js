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
const FormContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Form = styled.form`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  width: 50%;
  line-height: 30px;
  margin-left: 20px;
  align-items: center;
`;
const Input = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  outline: none;
  background-color: ${(props) => props.theme.third};
`;
const InputContainer = styled.section`
  width: 50%;
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
  Form,
  StockContainer,
  ModalCloseButton,
  modalStyles,
  Input,
  InputContainer,
  FormContainer,
};
