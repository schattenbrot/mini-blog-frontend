import { NextComponentType } from "next";
import Link from "next/link";
import styles from "../../styles/components/Navbar.module.scss";

const Navbar: NextComponentType = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logo}></h1>
      <nav className={styles.nav}>
        <ul>
          <div>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <li>
              <Link href='/users'>Users</Link>
            </li>
          </div>
          <div>
            <li>
              <Link href='/login'>Login</Link>
            </li>
            <li>
              <Link href='/register'>Register </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
