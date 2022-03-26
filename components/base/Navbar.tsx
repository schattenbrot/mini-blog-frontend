import axios from "axios";
import { NextComponentType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../store";
import styles from "../../styles/components/Navbar.module.scss";
import NavLink from "./NavLink";
import dayjs from "dayjs";
import LangSwitch from "./LangSwitch";

const Navbar: NextComponentType = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logoutUser } = bindActionCreators(actionCreators, dispatch);
  const { user: userId, cookieExpiration } = useSelector(
    (state: State) => state.users
  );

  useEffect(() => {
    if (dayjs(cookieExpiration).isBefore(dayjs())) {
      logoutUser();
    }
  }, [cookieExpiration, logoutUser]);

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
          <div className={styles["link-area"]}>
            <li>
              <NavLink href='/' exact>
                Home
              </NavLink>
            </li>
            <li className={styles.dropdown}>
              <NavLink href='/blog'>Blog</NavLink>
              <div className={styles["dropdown-content"]}>
                <NavLink href='/blog/create' className='nav-link' exact>
                  Create Post
                </NavLink>
              </div>
            </li>
            <li className={styles.dropdown}>
              <NavLink href='/users'>Users</NavLink>
              <div className={styles["dropdown-content"]}>
                <NavLink href={"/users/" + userId} className='nav-link' exact>
                  Show account
                </NavLink>
              </div>
            </li>
          </div>
          <div className={styles["link-area"]}>
            {userId && (
              <>
                <li>
                  <NavLink href={"/users/" + userId}>{userId}</NavLink>
                </li>
                <li>
                  <a onClick={logoutHandler} className={styles.link}>
                    Logout
                  </a>
                </li>
              </>
            )}
            {!userId && (
              <>
                <li>
                  <NavLink href='/login'>Login</NavLink>
                </li>
                <li>
                  <NavLink href='/register'>Register</NavLink>
                </li>
              </>
            )}
            <LangSwitch />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
