import Header from "../../components/Header/Header";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import SideCart from "../../components/SideCart/SideCart";
import { useSideCart } from "../../hooks/useSideCart";
import styles from "./Account.module.css";

export default function Register() {
  const { container, headerText, subText, registerLink } = styles;
  const [isCartOpen, toggleCart] = useSideCart();

  return (
    <>
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {/* {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />} */}
      </ModalBackground>
      <main className={container}>
        <h2 className={headerText}>Register</h2>
        <p className={subText}>Create A New Account</p>
        <RegisterForm />
        <div>
          <span>Have an Account?</span>
          <a className={registerLink} href="/account/login">
            Login
          </a>
        </div>
      </main>
    </>
  );
}
