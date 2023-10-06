import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";

export const modalStyles = {
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
export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormStyle = styled.form`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  line-height: 30px;
  align-items: center;
`;
export const Input = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  outline: none;
  background-color: ${(props) => props.theme.third};
`;
export const InputContainer = styled.section`
  width: 50%;
`;

export const StockContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30px;
`;
export const ErrorModal = styled.div`
  background-color: ${(props) => props.theme.fifth};
  padding: 1em 2em;
  text-align: center;
  border-radius: 0.5em;
  max-width: 500px;
  display: ${(props) => (props.isActive ? "block" : "none")};
  align-self: center;
`;
export const ErrorIcon = styled(BiErrorCircle)`
  color: ${(props) => props.theme.primary};
  font-size: 40px;
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 100px;
  right: ${(props) => (props.visible ? "5%" : "-100%")};
  background-color: ${(props) => props.theme.third};
  padding: 8px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.success};
  transform: translateX(${(props) => (props.visible ? "0" : "100%")});
  transition: transform 0.5s ease-in-out, right 0.5s ease-in-out;
`;

export const SuccessIcon = styled(AiOutlineCheckCircle)`
  color: ${(props) => props.theme.success};
  transform: translateY(3px);
  margin-right: 5px;
  font-size: 16px;
`;
