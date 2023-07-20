import styled from "styled-components";
import Image from "next/image";

const StyledHeader = styled.header`
  background-color: rgb(211, 17, 25);
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
`;
const StyledLogo = styled(Image)`
  border-radius: 5px;
  position: fixed;
  top: 20px;
  left: 40px;
`;
export { StyledHeader, StyledLogo };
