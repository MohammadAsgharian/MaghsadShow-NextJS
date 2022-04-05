import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { useDispatch } from "react-redux";
import { loginUser } from "redux";

const session = {
  jwt: true,
};
const providers = [
  CredentialsProvider({
    name: "Custome",
    credentials: {
      email: { label: "email", type: "text" },
      password: { label: "password", type: "password" },
    },
    authorize: async (credentials, req) => {
      alert("asdasdasd");
      const dispatch = useDispatch();
      const user = dispatch(loginUser(credentials));
      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user;
      } else {
        // If you return null or false then the credentials will be rejected
        return null;
      }
    },
  }),
];

const callbacks = {
  // Getting the JWT token from API response
  async jwt(token, user) {
    if (user) {
      token.accessToken = user.token;
    }

    return token;
  },

  async session(session, token) {
    session.accessToken = token.accessToken;
    return session;
  },
};

const options = {
  providers,
  callbacks,
  session,
};

export default (req, res) => NextAuth(req, res, options);
