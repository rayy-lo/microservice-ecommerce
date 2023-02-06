import Image from "next/image";
import Link from "next/link";
import styles from "./HomeProducts.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  url: string;
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider = ({ products }: ProductSliderProps) => {
  const { container, productWrapper, productInfo } = styles;

  return (
    <section className={container}>
      {products.map((product) => {
        return (
          <div className={productWrapper} key={product.id}>
            <Link href="/">
              <Image
                width={200}
                height={200}
                src={product.imageUrl}
                alt={product.name}
              />
            </Link>
            <div className={productInfo}>
              <span>{product.name}</span>
              <span>${product.price}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProductSlider;
