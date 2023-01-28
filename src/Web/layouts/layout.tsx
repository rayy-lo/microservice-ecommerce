import Header from "../components/header/Header";
import { ReactNode } from "react";
// import Footer from "./footer";

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
