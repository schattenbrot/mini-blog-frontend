import type { NextComponentType } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/base/Navbar";
import styles from "../styles/layouts/layout.module.scss";

const Layout: NextComponentType = ({ children }) => {
  const [userInputs, setUserInputs] = useState<string>("");
  const [showEasterEgg, setShowEasterEgg] = useState<boolean>(false);

  useEffect(() => {
    const lastInputs = userInputs.slice(
      userInputs.length - 7,
      userInputs.length
    );

    if (lastInputs === "uwunyan") {
      setShowEasterEgg(true);
    }

    if (userInputs.length >= 20) {
      setUserInputs(lastInputs);
    }
  }, [userInputs]);

  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setUserInputs((input) => input + event.key);
  };

  const closeEasterEgg: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setUserInputs("");
    setShowEasterEgg(false);
  };

  return (
    <div className={styles.grid} tabIndex={0} onKeyPress={keyPressHandler}>
      {showEasterEgg ? (
        <div className={styles.easterContainer} onClick={closeEasterEgg}>
          <Image
            src='/astolfo.png'
            alt='astolfo it is'
            width='780px'
            height='1033px'
          />
        </div>
      ) : (
        ""
      )}
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
