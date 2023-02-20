import { MouseEvent } from "react";
import styles from "./SideCart.module.css";
import { Cart } from "../../types/types";

type SideCartProps = {
  cart: Cart;
  closeModal: (event: MouseEvent) => void;
};

const SideCart = ({ cart, closeModal }: SideCartProps) => {
  const { cartContainer, cartBody, cartHeader, cartFooter, cartCloseBtn } =
    styles;

  return (
    <div className={cartContainer}>
      <div className={cartHeader}>
        <h1>Your Cart</h1>
      </div>
      <button className={cartCloseBtn} type="button" onClick={closeModal}>
        X
      </button>
      <ul className={cartBody}></ul>
      <div className={cartFooter}></div>
    </div>
  );
};

export default SideCart;
