import { FunctionComponent, ReactNode, useContext } from "react";
import Navbar from "./Navbar";
import { AppContext, IAppContext } from "../Context/AppContext";

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  const { globalProperty } = useContext<IAppContext>(AppContext);
  return (
    <>
      <Navbar />
      <div className={`${globalProperty ? "_noScroll" : ""}`}>{children}</div>
    </>
  );
};

export default Layout;
