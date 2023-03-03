import "../styles/globals.css";
import type { AppContext, AppProps } from "next/app";
import { Cormorant_Garamond } from "@next/font/google";
import Layout from "../layouts/layout";
import { Cart } from "../types/types";

const inter = Cormorant_Garamond({ weight: ["400", "700"], style: ["normal"] });

type TProps = AppProps & {
  cart: Cart;
};

export default function App({ Component, pageProps, cart }: TProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout cart={cart}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

App.getInitialProps = async (context: AppContext) => {
  const res = await fetch(`${process.env.API_GATEWAY_URL}/cart`);
  const cart = await res.json();

  return { cart };
};
