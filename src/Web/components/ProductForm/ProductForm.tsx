import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import { addToCart } from "../../hooks/useAddToCart";
import { Product } from "../../types/types";
import styles from "./ProductForm.module.css";

interface ProductFormProps {
  product: Product;
}

export default function ProductForm({ product }: ProductFormProps) {
  const { form, button } = styles;
  // TODO: Can add option to handle different variants like color, size...

  const addProduct = useMutation({
    mutationFn: (data) => {
      return addToCart(data);
    },
  });

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const productId: string | null =
      event.currentTarget.getAttribute("data-product-id");

    if (productId) {
      const quantity = formData.get("quantity");
      addProduct.mutate({ id: productId, quantity });
    }
  };

  return (
    <form data-product-id={product.id} className={form} onSubmit={submitForm}>
      <input hidden name="quantity" type="number" min={1} defaultValue={1}></input>
      <button className={button} type="submit">
        Add To Cart
      </button>
    </form>
  );
}
