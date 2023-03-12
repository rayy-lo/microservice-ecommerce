import { useQuery } from "@tanstack/react-query";

const getCollection = (handle: string): Promise<any> => {
  return fetch(
    `${process.env.NEXT_PUBLIC_API_GATEWAY_URL}/collection/${handle}`
  ).then((res) => res.json());
};

const useCollection = (handle: string) => {
  return useQuery(["homepage-products", handle], () => getCollection(handle));
};

export { getCollection, useCollection };
