import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/components/base/NavLink.module.scss";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  className?: string;
  activeClassName?: string;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  exact,
  activeClassName,
  className,
  ...props
}) => {
  const { pathname } = useRouter();

  if (exact === undefined) exact = true;

  const isActive = exact ? pathname === href : pathname.startsWith(href);

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
    <Link href={href}>
      <a className={cssClasses}>{props.children}</a>
    </Link>
  );
};

export default NavLink;
