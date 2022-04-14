import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme, { cacheRtl } from "../configs/theme";
import { wrapper } from "../redux/store";
import { SessionProvider } from "next-auth/react";
import { CacheProvider } from "@emotion/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(MyApp);
