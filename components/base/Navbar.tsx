import axios from "axios";
import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../store";
import styles from "../../styles/components/Navbar.module.scss";

const Navbar: NextComponentType = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);
  const userId: string = useSelector((state: State) => state.users);

  const logoutHandler = async () => {
    try {
      await axios.get("/users/logout");
      logoutUser();

      router.replace("/login");
    } catch (error) {
      console.error("Could not log the user out: " + error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <Image
          src='/assets/images/favicon-32x32.png'
          width='32'
          height='32'
          alt='SB'
        />
      </div>
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
          {userId && (
            <div>
              <li>
                <Link href={"/users/" + userId}>{userId}</Link>
              </li>
              <li>
                <a onClick={logoutHandler}>Logout</a>
              </li>
            </div>
          )}
          {!userId && (
            <div>
              <li>
                <Link href='/login'>Login</Link>
              </li>
              <li>
                <Link href='/register'>Register</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
