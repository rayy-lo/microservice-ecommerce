import { ReactNode, useState, MouseEvent } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SideCart from "../components/SideCart/SideCart";
import { Cart } from "../types/types";
import ModalBackground from "../components/ModalBackground/ModalBackground";

type LayoutProps = {
  children?: ReactNode;
  cart: Cart;
};

const Layout = ({ children, cart }: LayoutProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (event: MouseEvent) => {
    setModalOpen(true);
  };

  const closeModal = (event: MouseEvent) => {
    setModalOpen(false);
  };
  return (
    <>
      <Header openModal={openModal} itemCount={cart.itemCount} />
      <ModalBackground openModal={openModal} isOpen={modalOpen}>
        <SideCart cart={cart} closeModal={closeModal} />
      </ModalBackground>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
