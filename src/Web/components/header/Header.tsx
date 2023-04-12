import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo-no-background.png";
import Cart from "../../public/icons/shopping-bag.png";
import User from "../../public/icons/user.png";
import Hamburger from "../../public/icons/hamburger.svg";
import styles from "./Header.module.css";
import { useState, MouseEventHandler, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const Header = ({ toggleCart }) => {
  const {
    nav,
    header,
    leftNav,
    rightNav,
    logoLink,
    button,
    mobileMenu,
    mobileMenuBtn,
  } = styles;

  const nodeRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu: MouseEventHandler = (event) => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header className={header}>
        <nav className={nav}>
          <ul className={leftNav}>
            <Link className={logoLink} href="/">
              <Image width={120} src={Logo} alt="Comme Logo" />
            </Link>
            <Link href="/collection/best-sellers">Best Sellers</Link>
            <Link href="/collection/featured">Featured</Link>
            <Link href="/collection/sale">Sale</Link>
          </ul>
          <ul className={rightNav}>
            <Link href="/account/login">
              <Image width={25} src={User} alt="Login" />
            </Link>
            <button className={button} onClick={toggleCart} type="button">
              Cart
              <Image width={25} src={Cart} alt="Cart" />
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`${button} ${mobileMenuBtn}`}
              type="button"
            >
              Menu
              <Image width={25} src={Hamburger} alt="Menu" />
            </button>
          </ul>
        </nav>
      </header>
      <CSSTransition
        appear
        nodeRef={nodeRef}
        unmountOnExit
        in={isMobileMenuOpen}
        timeout={{
          enter: 200,
          exit: 200,
        }}
        classNames={{
          ...styles,
        }}
      >
        <div className={mobileMenu} ref={nodeRef}>
          <nav>
            <ul>
              <li>
                <Link href="/account/login">My Account</Link>
              </li>
              <li>
                <Link href="/collection/best-sellers">Best Sellers</Link>
              </li>
              <li>
                <Link href="/collection/featured">Featured</Link>
              </li>
              <li>
                <Link href="/collection/sale">Sale</Link>
              </li>
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </>
  );
};

export default Header;
