import { FC, ReactNode } from "react"
import style from "./Wrapper.module.scss"
const Wrapper: FC<{imagePath: string; children: ReactNode}>= ({imagePath, children}) =>{
    return (
        <div className={style.wrapper} style={{backgroundImage: `url(${imagePath})` }}>
            {children}
        </div>
    )
}

export default Wrapper