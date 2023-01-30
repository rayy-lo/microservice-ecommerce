import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-no-background.png";
import Cart from "../../public/icons/shopping-bag.png";
import User from "../../public/icons/user.png";
import styles from "./Header.module.css";

const Header = () => {
  const { nav, header, leftNav, rightNav, logoLink } = styles;

  return (
    <header className={header}>
      <nav className={nav}>
        <div className={leftNav}>
          <Link className={logoLink} href="/">
            <Image width={120} src={Logo} alt="Comme Logo" />
          </Link>
          <Link href="/products/cat-castle">Cat Castle</Link>
          <Link href="/products/feline-fortress">Feline Fortress</Link>
          <Link href="/collections/cat-beds">Cat Beds</Link>
        </div>
        <div className={rightNav}>
          <Link href="/login">
            <Image width={25} src={User} alt="Login" />
          </Link>
          <Link href="/cart">
            <Image width={26} height={26} src={Cart} alt="Cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
