import type { AppProps } from "next/app";
import axios from "axios";
import Layout from "../layouts/Layout";
import "../styles/globals.scss";

axios.defaults.baseURL = process.env.API_BASE_URL
  ? process.env.API_BASE_URL
  : "http://localhost:4000";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
