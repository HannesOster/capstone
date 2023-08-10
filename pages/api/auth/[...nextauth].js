import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

const providers = [];

if (process.env.VERCEL_ENV === "preview") {
  providers.push(
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "fish" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (
          credentials.username === "henni" &&
          credentials.password === "Constantin6995!"
        ) {
          return {
            id: "6995",
            name: "Jan-Henric",
            email: "jan-henric@blumen-osterkamp.de",
          };
        }
        if (
          credentials.username === "fahrer" &&
          credentials.password === "028246995"
        ) {
          return {
            id: "6406",
            name: "Jan-Henric",
            email: "jan-henric@blumen-osterkamp.de",
          };
        } else {
          return null;
        }
      },
    })
  );
} else {
  providers.push(
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  );
}

export const authOptions = {
  providers,
};
export default NextAuth(authOptions);
