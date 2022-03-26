import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/components/base/NavLink.module.scss";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
  locale?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  exact,
  activeClassName,
  className,
  locale,
  ...props
}) => {
  const { pathname, locale: currLang } = useRouter();

  const isActive = !locale
    ? exact
      ? pathname === href
      : pathname.startsWith(href)
    : locale === currLang;

  let cssClasses = styles["link"];
  if (className) {
    cssClasses +=
      " " +
      className
        .split(" ")
        .map((cssClass) => styles[cssClass])
        .join(" ");
  }

  if (isActive) {
    cssClasses += " " + styles[activeClassName ?? "active"];
  }

  return (
    <Link href={href} locale={locale}>
      <a className={cssClasses}>{props.children}</a>
    </Link>
  );
};

export default NavLink;
