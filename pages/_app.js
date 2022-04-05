import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../configs/theme";
import { wrapper } from "../redux/store";
import { SessionProvider } from "next-auth/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
