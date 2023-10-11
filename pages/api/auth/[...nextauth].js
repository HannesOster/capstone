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
        credentials.username === "admin" &&
        credentials.password === process.env.ADMIN_PW
      ) {
        return {
          id: "6995",
          name: "Admin",
          role: "admin",
        };
      }
      if (
        credentials.username === "fahrer" &&
        credentials.password === process.env.USER_PW
      ) {
        return {
          id: "6406",
          name: "Fahrer",
          role: "driver",
        };
      }
      if (
        credentials.username === "test" &&
        credentials.password === process.env.TEST_PW
      ) {
        return {
          id: "1",
          name: "Test",
          role: "driver",
        };
      } else {
        return null;
      }
    },
  })
);

export const authOptions = {
  providers,
};
export default NextAuth(authOptions);
