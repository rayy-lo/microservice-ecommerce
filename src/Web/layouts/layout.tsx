import Header from "../components/Header/Header";
import { ReactNode } from "react";
import Footer from "../components/Footer/Footer";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
