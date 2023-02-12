import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Cormorant_Garamond } from "@next/font/google";
import Layout from "../layouts/layout";
import { getCookie, hasCookie } from "cookies-next";

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

App.getInitialProps = async (context: AppContext) => {
  const { req, res } = context.ctx;

  if (req && res) {
    //Get session ID
    const sessionId = getCookie("session-id", { req, res });
  }

  // Client side routing

  return {};
};
