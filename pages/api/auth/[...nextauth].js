import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        alert("asdasdasdasd");
        const { UserName = "Ali", Password = "asasd" } = user;
        if (user) {
          return Promise.resolve(user);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && token.user && user;
      return Promise.resolve(token);
    },
    session: async (token, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
