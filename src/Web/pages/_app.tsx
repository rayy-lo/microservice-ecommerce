import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "@next/font/google";
import Layout from "../layouts/layout";

const inter = Cormorant_Garamond({ weight: ["400", "700"], style: ["normal"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
