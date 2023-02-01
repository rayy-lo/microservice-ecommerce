import Image, { StaticImageData } from "next/image";
import styles from "./LandingHero.module.css";

type LandingHeroProps = {
  src: StaticImageData;
  alt: string;
};

const LandingHero = ({ src, alt }: LandingHeroProps) => {
  return (
    <section className={styles.container}>
      <Image
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              100vw"
        width={1920}
        height={1080}
        src={src}
        alt={alt}
      />
      <div></div>
    </section>
  );
};

export default LandingHero;
