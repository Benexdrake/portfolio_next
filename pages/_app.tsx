import Layout from "@/components/layout";
import "@/styles/globals.css";
import axios from "axios";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}