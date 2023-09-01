import { getSession } from "next-auth/react";

export async function checkAuth(ctx) {
  const session = await getSession(ctx);
  return session;
}
