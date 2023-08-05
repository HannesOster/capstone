import styled from "styled-components";

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
export const Form = styled.form`
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
