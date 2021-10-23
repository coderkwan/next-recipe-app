import "../styles/globals.css";
import Head from "next/dist/shared/lib/head";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/fork.png" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
