import styled from "styled-components";

const Form = styled.form`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  width: 90%;
  line-height: 30px;
  margin-left: 20px;
  align-items: center;
`;

const FormButton = styled.button`
  margin-top: 30px;
  color: ${(props) => props.theme.tertiary};
  background-color: ${(props) => props.theme.secondary};
  text-decoration: none;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: large;
`;

export { Form, FormButton };
