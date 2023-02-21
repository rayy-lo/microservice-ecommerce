import { useState } from "react";
import { Product } from "../../types/types";
import styles from "./ProductForm.module.css";

interface ProductFormProps {
  product: Product;
}

export default function ProductForm({ product }: ProductFormProps) {
  const { form, button } = styles;
  const [selectedVariant, setSelectedVariant] = useState(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    const url = `${process.env.CART_API_URL}/api/cart`;
  };

  return (
    <form className={form} onSubmit={handleAddToCart}>
      <button className={button} type="submit">
        Add To Cart
      </button>
    </form>
  );
}
