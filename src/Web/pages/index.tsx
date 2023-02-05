import Head from "next/head";
import ColumnText from "../components/ColumnText/ColumnText";
import LandingHero from "../components/LandingHero/LandingHero";
import LandingHeroImage from "../public/hero-image.jpg";

export default function Home() {
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
      </main>
    </>
  );
}
