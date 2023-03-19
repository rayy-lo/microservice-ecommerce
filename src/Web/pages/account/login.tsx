import Header from "../../components/Header/Header";
import LoginForm from "../../components/LoginForm/LoginForm";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import SideCart from "../../components/SideCart/SideCart";
import { useSideCart } from "../../hooks/useSideCart";
import styles from "./Account.module.css";

export default function Login() {
  const { container, headerText, subText, registerLink } = styles;
  const [isCartOpen, toggleCart] = useSideCart();

  return (
    <>
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {/* {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />} */}
      </ModalBackground>
      <main className={container}>
        <h2 className={headerText}>Login</h2>
        <p className={subText}>Sign In To Your Existing Account</p>
        <LoginForm />
        <div>
          <span>No Account?</span>
          <a className={registerLink} href="/account/register">
            Register Now
          </a>
        </div>
      </main>
    </>
  );
}
