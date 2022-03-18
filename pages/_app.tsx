import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../layouts/Layout";
import { PersistGate } from "redux-persist/integration/react";
import "../styles/globals.scss";

import { Provider } from "react-redux";
import Store from "../store/store";
import Head from "next/head";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL != undefined
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:4000/v1";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  const { store, persistor } = Store();
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
