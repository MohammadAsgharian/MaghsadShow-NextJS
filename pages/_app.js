import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../configs/theme";
import { wrapper } from "../redux/store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
