import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      authorize: async (credentials) => {
        const CONTAINER_URL = `${process.env.API_URL}account/login/`;
        const { user } = await axios({
          method: "post",
          url: CONTAINER_URL,
          data: credentials,
        });

        if (!user) {
          throw new Error("Invalid Email or Password");
        }
        return Promise.resolve(user);
      },
    }),
  ],
  callbacks: {
    jwt: async (token, user) => {
      user && (token.user = user);
      return Promise.resolve(user);
    },
    session: async (session, user) => {
      session.user = user.user;
      return Promise.resolve(session);
    },
  },
});
