import styled from "styled-components";
import { FiSave } from "react-icons/fi";
import Link from "next/link";
import { MdOutlineCancel } from "react-icons/md";

export const StyledLink = styled(Link)`
  color: ${(props) =>
    props.variant === "success"
      ? props.theme.success
      : props.variant === "danger"
      ? props.theme.danger
      : props.theme.secondary};
  background-color: ${(props) => props.theme.third};
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  border: 3px solid
    ${(props) =>
      props.variant === "success"
        ? props.theme.success
        : props.variant === "danger"
        ? props.theme.danger
        : props.theme.secondary};
  border-radius: 5px;
  width: ${(props) =>
    props.size === "s" ? "none" : props.size === "m" ? "none" : "80%"};

  padding: ${(props) =>
    props.size === "s"
      ? "5px 20px"
      : props.size === "m"
      ? "10px 30px"
      : "20px 30px"};

  text-decoration: none;
  font-size: ${(props) =>
    props.size === "s" ? "1rem" : props.size === "m" ? "1rem" : "1.3rem"};
  width: ${(props) => props.width};
  font-weight: normal;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: translateY(0);
  }
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  color: ${(props) =>
    props.variant === "success"
      ? props.theme.success
      : props.variant === "danger"
      ? props.theme.danger
      : props.variant === "neutral"
      ? props.theme.third
      : props.theme.secondary};
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "neutral" ? props.theme.primary : props.theme.third};
  height: ${(props) => (props.variant === "neutral" ? "60px" : "none")};
  border: 3px solid
    ${(props) =>
      props.variant === "success"
        ? props.theme.success
        : props.variant === "danger"
        ? props.theme.danger
        : props.variant === "neutral"
        ? props.theme.third
        : props.theme.secondary};
  border-radius: 5px;
  width: ${(props) =>
    props.size === "xs"
      ? "none"
      : props.size === "s"
      ? "none"
      : props.size === "m"
      ? "none"
      : props.size === "l"
      ? "50%"
      : "80%"};
  padding: ${(props) =>
    props.size === "xs"
      ? "10px 10px"
      : props.size === "s"
      ? "5px 20px"
      : props.size === "m"
      ? "10px 30px"
      : props.size === "l"
      ? "30px 40px"
      : "20px 30px"};

  text-decoration: none;
  font-size: ${(props) =>
    props.size === "s"
      ? "1rem"
      : props.size === "m"
      ? "1rem"
      : props.size === "l"
      ? "2rem"
      : "1.3rem"};

  font-weight: normal;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  margin-top: ${(props) => (props.variant === "neutral" ? "auto" : "")};
  transform: ${(props) =>
    props.variant === "neutral" ? "translateY(-12px)" : "none"};
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const SaveIcon = styled(FiSave)`
  transform: translate(-5px, 2px);
  color: ${(props) => props.theme.success};
`;
export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 130px;
  align-items: center;
  gap: 30px;
`;
export const CancelIcon = styled(MdOutlineCancel)`
  transform: translate(-5px, 2px);
`;
