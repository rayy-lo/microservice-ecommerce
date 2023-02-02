import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo-no-background.png";
import styles from "./Footer.module.css";

const Footer = () => {
  const { footer, footerLinks } = styles;

  return (
    <footer className={footer}>
      <Image width={120} src={Logo} alt="Comme Logo" />
      <div className={footerLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/terms">Terms and Conditions</Link>
        <Link href="/shipping">Shipping</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </footer>
  );
};

export default Footer;
