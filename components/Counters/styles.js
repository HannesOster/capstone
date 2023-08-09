import styled from "styled-components";
export const CountersContainer = styled.section`
  margin: 20px;
  border-radius: 10px;
  border: 3px solid ${(props) => props.theme.fifth};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
