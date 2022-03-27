import Head from "next/head";
import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../layouts/Layout";
import "../styles/globals.scss";

import { Provider } from "react-redux";
import { store, persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { appWithTranslation } from "next-i18next";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL != undefined
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:4000/v1";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
