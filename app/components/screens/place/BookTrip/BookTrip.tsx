import { FaCaretRight } from "react-icons/fa6";
import style from "./BookTrip.module.scss";
import { useState } from "react";
import cn from "classnames";

const BookTrip = () => {
  const [isActive, setIsActive] = useState(false);
  const ClickButton = () => {
    setIsActive(!isActive)
  };
  return (
    <button
      onClick={ClickButton}
      className={cn(style.button, isActive && style.active)}
    >
      <span className={cn(style.text, isActive && style.textActive)}>Book a trip</span>
      <span className={cn(style.icon, isActive && style.iconActive)}>
        <FaCaretRight />
      </span>
    </button>
  );
};

export default BookTrip;
