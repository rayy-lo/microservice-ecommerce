import Head from "next/head";
import ColumnText from "../components/ColumnText/ColumnText";
import LandingHero from "../components/LandingHero/LandingHero";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import LandingHeroImage from "../public/hero-image.jpg";
import ModalBackground from "../components/ModalBackground/ModalBackground";
import SideCart from "../components/SideCart/SideCart";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useCart } from "../hooks/useCart";
import { useCollection } from "../hooks/useCollection";
import { useSideCart } from "../hooks/useSideCart";
import Header from "../components/Header/Header";

export default function Home() {
  const { data: cart, isLoading: cartIsLoading } = useCart();
  const { data: collection, isLoading: collectionIsLoading } =
    useCollection("homepage-products");

  const [isCartOpen, toggleCart] = useSideCart();

  console.log({ cart });

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
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />}
      </ModalBackground>
      <main>
        <LandingHero src={LandingHeroImage} alt="Cat lying on cat bed" />
        <ColumnText />
        {!collectionIsLoading && (
          <HomeProducts products={collection.products} />
        )}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const queryClient = new QueryClient();

  try {
    const fetchOptions: RequestInit = {
      headers: {
        cookie: context.req.cookies["cartId"]
          ? `cartId=${context.req.cookies["cartId"]}`
          : "",
      },
    };

    await Promise.all([
      queryClient.fetchQuery(["cart"], () =>
        fetch(`${process.env.API_GATEWAY_URL}/cart`, fetchOptions).then(
          (res) => {
            const cartCookie = res.headers.get("set-cookie");
            context.res.setHeader("set-cookie", cartCookie);
            return res.json();
          }
        )
      ),
      queryClient.prefetchQuery({
        queryKey: ["homepage-products"],
        queryFn: ({ queryKey }) =>
          fetch(
            `${process.env.API_GATEWAY_URL}/collection/${queryKey[0]}`
          ).then((res) => res.json()),
      }),
    ]);
  } catch (err) {
    console.error("Fetch Error", err);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
