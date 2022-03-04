import type { AppProps } from "next/app";
import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../layouts/layout";
import { darkTheme, ThemeType } from "../themes/themes";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
* {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};

  & > div {
    height: 100%;
  }
}
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<ThemeType>(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
