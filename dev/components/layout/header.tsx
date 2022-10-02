import styles from "@styles/layout/header.module.scss";
import cls from "classnames";

const navs = ["Home", "Speaker", "TearDown", "Battery"];

function Header() {
  return (
    <header className={cls(styles.wrapper)}>
      <div className={cls(styles.container, "ctn")}>
        <nav className={cls(styles.navWrapper)}>
          {navs.map(title => (
            <NavItem title={title} key={title} />
          ))}
        </nav>
        <a className={cls("subtitle")}>SPEAKERCITY</a>
        <div>
          <button>a</button>
          <button>b</button>
          <button>c</button>
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
