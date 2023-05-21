import { FunctionComponent, ReactNode } from "react";
import Navbar from "./Navbar";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
