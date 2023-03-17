import { useMutation } from "@tanstack/react-query";

const addToCart = async (data) => {
  const bodyData = {
    items: [
      {
        id: data.id,
        quantity: data.quantity,
      },
    ],
  };

  const fetchOptions: RequestInit = {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/cart`,
    fetchOptions
  );

  return response;
};

const useAddToCart = () => useMutation(addToCart);

export { addToCart, useAddToCart };
