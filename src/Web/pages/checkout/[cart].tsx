import { ReactElement } from "react";
import CheckoutLayout from "../../layouts/checkoutLayout";
import { NextPageContext } from "next";

export default function Checkout() {
  return;
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <CheckoutLayout>{page}</CheckoutLayout>;
};

export async function getServerSideProps({ req }: NextPageContext) {
  const cookies = req?.headers.cookie;

  console.log(cookies);

  // const ha
  // redirect("/checkout/");
  return {
    props: {},
  };
}
