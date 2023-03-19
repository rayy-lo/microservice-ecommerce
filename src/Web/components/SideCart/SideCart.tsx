import styles from "./SideCart.module.css";
import { Cart } from "../../types/types";
import Link from "next/link";
import CartLineItem from "../CartLineItem/CartLineItem";

type SideCartProps = {
  cart: Cart;
  closeModal: () => void;
};

const SideCart = ({ cart, closeModal }: SideCartProps) => {
  const {
    totals,
    cartContainer,
    cartBody,
    cartHeader,
    cartFooter,
    cartCloseBtn,
  } = styles;

  return (
    <div className={cartContainer}>
      <div className={cartHeader}>
        <h1>Your Cart</h1>
      </div>
      <button className={cartCloseBtn} type="button" onClick={closeModal}>
        X
      </button>
      <div className={cartBody}>
        {cart.items.map((item, idx) => (
          <CartLineItem item={item} key={idx} />
        ))}
      </div>
      <div className={cartFooter}>
        <div className={totals}>
          <span>Total:</span>
          <span>${cart.totalPrice}</span>
        </div>
        <Link href="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default SideCart;
