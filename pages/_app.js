import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../configs/theme";
import { wrapper } from "../redux/store";
import { Provider } from "next-auth/client";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
