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
      : props.theme.secondary};
  cursor: pointer;
  background-color: ${(props) => props.theme.third};
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

export const SaveIcon = styled(FiSave)`
  transform: translate(-5px, 2px);
`;
export const MenuContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 130px;
  margin-bottom: 130px;
  align-items: center;
  gap: 30px;
`;
export const CancelIcon = styled(MdOutlineCancel)`
  transform: translate(-5px, 2px);
`;
