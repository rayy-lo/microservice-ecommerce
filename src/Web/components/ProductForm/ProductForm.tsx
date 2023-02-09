import styles from "./ProductForm.module.css";

export default function ProductForm() {
  const { form, button } = styles;

  return (
    <form className={form} action="">
      <button className={button} type="submit">
        Add To Cart
      </button>
    </form>
  );
}
