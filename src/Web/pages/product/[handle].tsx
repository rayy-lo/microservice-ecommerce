import Head from "next/head";
import Image from "next/image";
import ProductForm from "../../components/ProductForm/ProductForm";
import styles from "../../styles/ProductPage.module.css";

export default function ProductPage({ product }) {
  const {
    productContainer,
    productDetails,
    productName,
    price,
    imageContainer,
    description,
  } = styles;

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <section className={productContainer}>
        <div className={imageContainer}>
          <Image priority fill src={product.imageUrl} alt={product.title} />
        </div>
        <div className={productDetails}>
          <h2 className={productName}>{product.name}</h2>
          <span className={price}>${product.price}</span>
          <p className={description}>{product.description}</p>
          <ProductForm />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req, res, params }) {
  const response = await fetch(
    `${process.env.CATALOG_API_URL}/api/product/${params.handle}`
  );
  const product = await response.json();

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      product,
    },
  };
}
