import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const ImageContainer = styled.div`
  max-width: 30rem;
  margin: 0 auto;
  border: 2px solid grey;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  place-content: center;
`;

export const BrowseInput = styled.input`
  text-align: center;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 60%;
  outline: none;
  margin-top: 20px;
  background-color: ${(props) => props.theme.third};
`;
