import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const user = { UserName: "Ali", Password: "asasd" };
        if (user) {
          return Promise.resolve(user);
        }
        return null;
      },
    }),
  ],
});
