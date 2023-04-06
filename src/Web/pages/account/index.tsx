import Header from "../../components/Header/Header";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import { useSideCart } from "../../hooks/useSideCart";
import styles from "./Account.module.css";

export default function Account() {
  const { container, headerText, subText, registerLink } = styles;
  const [isCartOpen, toggleCart] = useSideCart();

  return (
    <>
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {/* {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />} */}
      </ModalBackground>
      <main className={container}>
        <h2 className={headerText}>Account Page</h2>
      </main>
    </>
  );
}
