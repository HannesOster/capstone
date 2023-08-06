import styled from "styled-components";
import Image from "next/image";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 3;
  display: flex;
  align-items: center;
  padding: 10px;
`;
export const StyledLogo = styled(Image)`
  border-radius: 5px;
  background-color: ${(props) => props.theme.third};
`;
