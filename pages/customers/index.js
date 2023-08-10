import Header from "../../components/Header/Header";
import List from "../../components/List/List";
import { useSession } from "next-auth/react";
export default function ListPage({}) {
  const { data: session } = useSession();
  return (
    <>
      {!session ? <Header /> : null}
      <List />
    </>
  );
}
