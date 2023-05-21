const CheckoutHeader = () => {
  return <header>Checkout Header</header>;
};

const CheckoutFooter = () => {
  return <footer>Checkout Footer</footer>;
};

const CheckoutLayout = ({ children }) => {
  return (
    <>
      <CheckoutHeader />
      {children}
      <CheckoutFooter />
    </>
  );
};

export default CheckoutLayout;
