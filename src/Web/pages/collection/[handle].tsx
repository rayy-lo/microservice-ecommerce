import Header from "../../components/Header/Header";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import SideCart from "../../components/SideCart/SideCart";
import { useSideCart } from "../../hooks/useSideCart";

export default function CollectionPage() {
  const [isCartOpen, toggleCart] = useSideCart();

  return (
    <>
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {/* {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />} */}
      </ModalBackground>
      <h1>Collection Page test</h1>
    </>
  );
}
