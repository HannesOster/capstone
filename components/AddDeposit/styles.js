import styled from "styled-components";

export const AddDepositHeading = styled.h1`
  margin-top: 110px;
  text-align: center;
`;
export const StockContainer = styled.section`
  display: flex;
  justify-content: space-around;
`;
export const CustomerStock = styled.p`
  background-color: ${(props) => props.theme.fifth};
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  }
`;
