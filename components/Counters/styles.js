import styled from "styled-components";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

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

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  align-items: center;
  width: 100%;
`;

export const IconPlaceholder = styled.div`
  width: 20%;
`;

export const IconMinus = styled(AiOutlineMinusSquare)`
  font-size: 40px;
  fill: ${(props) => props.theme.danger};
  cursor: pointer;
  width: 20%;
`;

export const IconPlus = styled(AiOutlinePlusSquare)`
  font-size: 40px;
  fill: ${(props) => props.theme.success};
  cursor: pointer;
  width: 20%;
`;

export const CounterValue = styled.span`
  width: 10%;
  text-align: center;
`;
export const Description = styled.p`
  width: 50%;
`;
