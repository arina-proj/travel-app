import { useRouter } from "next/router";
import style from "./Footer.module.scss";

type TypeNavItem = {
  icon: string;
  link: string;
};

const navItems: TypeNavItem[] = [
  {
    icon: "home",
    link: "/",
  },
  {
    icon: "explore",
    link: "/explore",
  },
  {
    icon: "place",
    link: "/place",
  },
  {
    icon: "person_outline",
    link: "/profile",
  },
];

const Footer = () => {
  const { push, pathname } = useRouter();
  const isActive = (link: string) =>{
    if (link==="/") return pathname==="/"
    else return pathname.startsWith(link)
  }

  return (
    <footer className={style.footer}>
      <nav>
        {navItems.map((item) => (
          <button
            className={isActive(item.link)  ? style.active : ""}
            onClick={() => push(item.link)}
            key={item.link}
          >
            <span className="material-icons-outlined">{item.icon}</span>
          </button>
        ))}
      </nav>
    </footer>
  );
};

export default Footer;
