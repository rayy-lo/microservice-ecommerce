import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

type LayoutProps = {
  children: ReactNode;
  toggleCart: () => void;
};

const Layout = ({ children, toggleCart }: LayoutProps) => {
  return (
    <>
      <Header toggleCart={toggleCart} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
