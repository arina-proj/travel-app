import { FaArrowLeft, FaBookmark } from "react-icons/fa6";
import style from "./Heading.module.scss";
import { FC } from "react";
import { useRouter } from "next/router";

const Heading: FC = () => {
  const router = useRouter();
  
  const BackClick = () => {
    if(window.history.length > 1){
      router.back();
    } else {
      router.push('/');
    }
  };
  
  return (
    <div className={style.wrapper}>
      <button className={style.icons} onClick={BackClick}>
        <FaArrowLeft />
      </button>
      
      {/* Временно убираем функционал избранного */}
      <button className={style.icons}>
        <FaBookmark color="gray" />
      </button>
    </div>
  );
};

export default Heading;