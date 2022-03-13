import type { NextComponentType } from "next";
import Navbar from "../components/base/Navbar";
import styles from "../styles/layouts/layout.module.scss";

const Layout: NextComponentType = ({ children }) => {
  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
