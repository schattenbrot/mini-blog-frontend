import { NextPage } from "next";
import { useRouter } from "next/router";
import useI18n from "../hooks/useI18n";
import { AboutPageTextType } from "../i18n/types";

import styles from "../styles/pages/About.module.scss";

const About: NextPage = () => {
  const { locale, asPath } = useRouter();
  const lang: AboutPageTextType = useI18n(locale, asPath);
  return <div className={styles.test}>{lang.content}</div>;
};

export default About;
