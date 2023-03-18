import { useState } from "react";

const useSideCart = (): [boolean, () => void] => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prevState) => !prevState);
  };

  return [isCartOpen, toggleCart];
};

export { useSideCart };
