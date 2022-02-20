import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../layouts/layout";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  background: #ccc;
}
`;

const theme = {
  colors: {
    primary: "#ffbbff",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
