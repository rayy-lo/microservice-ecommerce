import { GetServerSideProps } from "next";
import Header from "../../components/Header/Header";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import { useSideCart } from "../../hooks/useSideCart";
import styles from "./Account.module.css";

export default function Account() {
  const { container, headerText, subText, registerLink } = styles;
  const [isCartOpen, toggleCart] = useSideCart();

  return (
    <>
      <Header toggleCart={toggleCart} />
      <ModalBackground isOpen={isCartOpen}>
        {/* {!cartIsLoading && <SideCart cart={cart!} closeModal={toggleCart} />} */}
      </ModalBackground>
      <main className={container}>
        <h2 className={headerText}>Account Page</h2>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_URL}`);
  //get user orders
  //user should be authenticated, if not redirect to login
  //authenticated uses will have an id_token witht their email
  //use email to find their orders and return
  // const user = res.json();

  return { props: {} };
};
