import styled from "styled-components";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  z-index: 3;
`;
const StyledLogo = styled(Image)`
  border-radius: 5px;
  position: fixed;
  top: 20px;
  left: 40px;
  background-color: ${(props) => props.theme.third};
`;
export { StyledHeader, StyledLogo };
