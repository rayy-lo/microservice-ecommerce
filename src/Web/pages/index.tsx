import Head from "next/head";
import LandingHero from "../components/LandingHero/LandingHero";
import LandingHeroImage from "../public/hero-image.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Microservice Ecommerce</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <LandingHero src={LandingHeroImage} alt="Cat lying on cat bed" />
      </main>
    </>
  );
}
