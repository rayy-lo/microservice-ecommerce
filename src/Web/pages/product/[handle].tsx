import { dehydrate, QueryClient } from "@tanstack/react-query";
import Head from "next/head";
import Image from "next/image";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import ProductForm from "../../components/ProductForm/ProductForm";
import SideCart from "../../components/SideCart/SideCart";
import { useCart } from "../../hooks/useCart";
import styles from "../../styles/ProductPage.module.css";
import { Product } from "../../types/types";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({
  product,
  isCartOpen,
  toggleCart,
}: ProductPageProps) {
  const {
    productContainer,
    productDetails,
    productName,
    price,
    imageContainer,
    description,
  } = styles;

  const { data: cart, isLoading: cartIsLoading } = useCart();

  console.log({ cart });

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ModalBackground isOpen={isCartOpen}>
        {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />}
      </ModalBackground>
      <main>
        <section className={productContainer}>
          <div className={imageContainer}>
            <Image priority fill src={product.imageUrl} alt={product.name} />
          </div>
          <div className={productDetails}>
            <h2 className={productName}>{product.name}</h2>
            <span className={price}>${product.price}</span>
            <p className={description}>{product.description}</p>
            <ProductForm product={product} />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `${process.env.API_GATEWAY_URL}/product/${context.params.handle}`
  );

  const queryClient = new QueryClient();

  try {
    const fetchOptions: RequestInit = {
      headers: {
        cookie: context.req.cookies["cartId"]
          ? `cartId=${context.req.cookies["cartId"]}`
          : "",
      },
    };

    await queryClient.fetchQuery(["cart"], () =>
      fetch(`${process.env.API_GATEWAY_URL}/cart`, fetchOptions).then((res) => {
        const cartCookie = res.headers.get("set-cookie");
        context.res.setHeader("set-cookie", cartCookie);
        return res.json();
      })
    );
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      product: await response.json(),
      dehydratedState: dehydrate(queryClient),
    },
  };
}
