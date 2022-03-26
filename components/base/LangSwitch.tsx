import { useRouter } from "next/router";
import NavLink from "./NavLink";

import styles from "../../styles/components/base/LangSwitch.module.scss";

const LangSwitch: React.FC = () => {
  const { asPath } = useRouter();

  return (
    <div className={styles.languageSwitch}>
      <NavLink className={"language-link"} href={asPath} locale='en'>
        EN
      </NavLink>{" "}
      |{" "}
      <NavLink className={"language-link"} href={asPath} locale='de'>
        DE
      </NavLink>
    </div>
  );
};

export default LangSwitch;
