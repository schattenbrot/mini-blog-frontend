import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import styles from "../styles/pages/About.module.scss";

const About: NextPage = () => {
  const { t } = useTranslation();
  return <div className={styles.test}>{t("about:content")}</div>;
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  locale ?? "en";
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["about"])),
    },
  };
};

export default About;
