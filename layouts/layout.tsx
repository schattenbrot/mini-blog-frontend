import type { NextComponentType } from "next";
import Navbar from "../components/navbar";

const Layout: NextComponentType = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
