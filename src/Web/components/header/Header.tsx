import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-no-background.png";
import Cart from "../../public/icons/shopping-bag.png";
import User from "../../public/icons/user.png";
import styles from "./Header.module.css";

const Header = ({ toggleCart }) => {
  const { nav, header, leftNav, rightNav, logoLink } = styles;

  return (
    <header className={header}>
      <nav className={nav}>
        <div className={leftNav}>
          <Link className={logoLink} href="/">
            <Image width={120} src={Logo} alt="Comme Logo" />
          </Link>
          <Link href="/collection/best-sellers">Best Sellers</Link>
          <Link href="/collection/featured">Featured</Link>
          <Link href="/collection/sale">Sale</Link>
        </div>
        <div className={rightNav}>
          <Link href="/login">
            <Image width={25} src={User} alt="Login" />
          </Link>
          <button onClick={toggleCart} type="button">
            <Image width={25} src={Cart} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
