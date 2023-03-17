import { useQuery } from "@tanstack/react-query";
import { Cart } from "../types/types";

const getCart = (): Promise<Cart> => {
  return fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/cart`, {
    credentials: "include",
  }).then((res) => res.json());
};

const useCart = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
};

export { getCart, useCart };
