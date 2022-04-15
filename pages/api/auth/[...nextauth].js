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
        const userData = {
          Email: credentials.Email,
          Password: credentials.Password,
        };
        const { data } = await axios({
          method: "post",
          url: CONTAINER_URL,
          data: userData,
        });

        if (!data) {
          throw new Error("Invalid Email or Password");
        }
        return data;
      },
    }),
  ],
});
