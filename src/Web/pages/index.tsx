import Head from "next/head";
import ColumnText from "../components/ColumnText/ColumnText";
import LandingHero from "../components/LandingHero/LandingHero";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import LandingHeroImage from "../public/hero-image.jpg";
import ModalBackground from "../components/ModalBackground/ModalBackground";
import SideCart from "../components/SideCart/SideCart";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getCart, useCart } from "../hooks/useCart";

export default function Home({ isCartOpen, toggleCart }) {
  const { data: cart, isLoading, isError } = useCart();

  return (
    <>
      <Head>
        <title>Comme Cat Beds</title>
        <meta
          name="description"
          content="Sample e-commerce store that sells pet beds"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalBackground isOpen={isCartOpen}>
        {isLoading ? "" : <SideCart cart={cart!} closeModal={toggleCart} />}
      </ModalBackground>
      <main>
        <LandingHero src={LandingHeroImage} alt="Cat lying on cat bed" />
        <ColumnText />
        {/* <HomeProducts products={collection.products} /> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    await Promise.all([queryClient.prefetchQuery(["cart", getCart])]);
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
