import Layout from "@/components/layout/layout";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NotificationContextProvider } from "../../store/notifications-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NotificationContextProvider>
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </NotificationContextProvider>
  );
}
