import Head from "next/head";
import ColumnText from "../components/ColumnText/ColumnText";
import LandingHero from "../components/LandingHero/LandingHero";
import HomeProducts from "../components/HomeProducts/HomeProducts";
import LandingHeroImage from "../public/hero-image.jpg";

export default function Home({ collection }) {
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
      <main>
        <LandingHero src={LandingHeroImage} alt="Cat lying on cat bed" />
        <ColumnText />
        <HomeProducts products={collection.products} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.CATALOG_API_URL}/api/collection/homepage-products`
  );
  const collection = await res.json();

  return {
    props: {
      collection,
    },
  };
}
