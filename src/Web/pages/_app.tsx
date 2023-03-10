import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Cormorant_Garamond } from "@next/font/google";
import Layout from "../layouts/layout";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from "@tanstack/react-query";
import { useState } from "react";

const inter = Cormorant_Garamond({ weight: ["400", "700"], style: ["normal"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout toggleCart={toggleCart}>
          <Component
            {...pageProps}
            toggleCart={toggleCart}
            isCartOpen={isCartOpen}
          />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
