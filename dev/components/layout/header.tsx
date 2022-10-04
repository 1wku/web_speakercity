import styles from "@styles/layout/header.module.scss";
import cls from "classnames";
import Link from "next/link";
import Image from "next/image";

interface LinkType {
  icon: string;
  src: string;
  alt: string;
}

const navs = ["Home", "Speaker", "TearDown", "Battery"];
const links: LinkType[] = [
  {
    icon: "/icons/locate.svg",
    src: "#",
    alt: "locate icon",
  },
  {
    icon: "/icons/fb.svg",
    src: "#",
    alt: "facebook icon",
  },
  {
    icon: "/icons/ytb.svg",
    src: "#",
    alt: "Youtube icon",
  },
];

function Header() {
  return (
    <header className={cls(styles.wrapper)}>
      <div className={cls(styles.container, "ctn")}>
        <nav className={cls(styles.navWrapper)}>
          {navs.map(title => (
            <NavItem title={title} key={title} />
          ))}
        </nav>
        <Link href="/">
          <a className={cls("subtitle")}>SPEAKERCITY</a>
        </Link>
        <div className={cls(styles.btnWrapper)}>
          {links.map(link => (
            <a href={link.src} key={link.icon}>
              <Image
                src={link.icon}
                alt={link.alt}
                width="24px"
                height="24px"
              />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;

function NavItem({ title }: { title: String }) {
  return (
    <span className={cls(styles.navItem, "caption")}>
      {title}
    </span>
  );
}
