import { FC, ReactNode } from "react";
import Footer from "./footer/Footer";

interface ILayout{
  children: ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
  return (
    <div>
      <div style={{maxWidth: "450px", margin: "0 auto"}}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
