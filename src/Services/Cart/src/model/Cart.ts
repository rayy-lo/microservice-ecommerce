export interface Product {
  quantity: number;
  price: number;
  id: number;
}

class Cart {
  items: Product[];
  itemCount: number;
  totalPrice: number;

  constructor(oldProducts: Product[] = [], newProducts: Product[] = []) {
    this.items = oldProducts.reduce(
      (acc, oldProduct) => {
        const newProduct = newProducts.find(
          (newProduct) => newProduct.id === oldProduct.id
        );
        if (newProduct) {
          // If the product already exists in the old cart, increase its quantity
          acc.push({
            ...newProduct,
            quantity: oldProduct.quantity + newProduct.quantity,
          });
        } else {
          // If the product is not in the old cart, add it to the new cart array
          acc.push(oldProduct);
        }
        return acc;
      },
      newProducts.filter(
        (newProduct) =>
          !oldProducts.find((oldProduct) => oldProduct.id === newProduct.id)
      )
    );

    this.itemCount = this.items.reduce(
      (acc, product) => acc + product.quantity,
      0
    );
    this.totalPrice = this.items.reduce(
      (acc, product) => acc + product.price,
      0
    );
  }
}

export default Cart;
