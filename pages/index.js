import Link from "next/link";
import Header from "../components/Header/Header";
import styled from "styled-components";

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 100px;
`;

export default function Home() {
  return (
    <>
      <Header />

      <StyledLink href="/list-page">List</StyledLink>
    </>
  );
}
