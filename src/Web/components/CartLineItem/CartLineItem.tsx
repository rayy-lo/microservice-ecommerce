import Image from "next/image";
import Link from "next/link";
import styles from "./CartLineItem.module.css";

const CartLineItem = ({ item }) => {
  const { container, infoContainer } = styles;

  return (
    <form className={container}>
      <Image height={100} width={100} src={item.imageUrl} alt={item.title} />
      <div className={infoContainer}>
        <Link href={item.url}>{item.name}</Link>
        <span>${item.price}</span>
        <span>Qty: {item.quantity}</span>
      </div>
    </form>
  );
};

export default CartLineItem;
