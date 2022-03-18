import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../layouts/Layout";
import "../styles/globals.scss";

import { Provider } from "react-redux";
import { store } from "../store/index";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_BACKEND_URL != undefined
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : "http://localhost:4000/v1";
axios.defaults.withCredentials = true;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
