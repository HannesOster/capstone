import styled from "styled-components";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.primary};
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const StyledLogo = styled(Image)`
  border-radius: 5px;
  background-color: ${(props) => props.theme.third};
`;
export const LogInButton = styled.button`
  position: fixed;
  top: 10px;
  right: 20px;
  padding: 0px 5px;
  border: 3px ${(props) => props.theme.third} solid;
  font-size: 18px;
  border-radius: 5px;
  color: ${(props) => props.theme.third};
  background-color: ${(props) => props.theme.primary};
`;

export const LogOutContainer = styled.div`
  display: flex;
  width: auto;
  gap: 20px;
`;

export const SessionInfoContainer = styled.div`
  display: flex;
  width: auto;
  gap: 20px;
  justify-content: left;
  align-items: left;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
`;

export const UserIcon = styled(AiOutlineUser)`
  font-size: 20px;
  color: ${(props) => props.theme.third};
  text-align: center;
`;

export const SessionInfo = styled.p`
  color: ${(props) => props.theme.third};
  position: fixed;
  top: 25px;
  right: 22px;
`;
