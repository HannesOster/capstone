import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

providers.push(
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "Nutzername" },
      password: { label: "Password", type: "password" },
    },

    async authorize(credentials) {
      if (
        credentials.username === "henni" &&
        credentials.password === process.env.ADMIN_PW
      ) {
        return {
          id: "6995",
          name: "Admin",
          email: "jan-henric@blumen-osterkamp.de",
        };
      }
      if (
        credentials.username === "fahrer" &&
        credentials.password === process.env.USER_PW
      ) {
        return {
          id: "6406",
          name: "Fahrer",
          email: "jan-henric@blumen-osterkamp.de",
        };
      } else {
        return null;
      }
    },
  })
);
function getRoleOfUser(id) {
  if (id === "6995") {
    return "admin";
  }
  return "fahrer";
}
export const authOptions = {
  providers,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = getRoleOfUser(user.id);
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      return session;
    },
  },
};
export default NextAuth(authOptions);
