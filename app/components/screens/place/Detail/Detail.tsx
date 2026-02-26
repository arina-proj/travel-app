import { FC } from "react";
import { IPlace } from "../../../../ts/place";
import style from "./Detail.module.scss";
import { LuMapPin } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import Map from "./Map";

interface IPlacePage {
  place: IPlace;
}

const Detail: FC<IPlacePage> = ({ place }) => {
  return (
    <div className={style.wrapper}>
      <span>
        <LuMapPin className={style.icon} />
        <h2>
          {place.location.city}, {place.location.country}
        </h2>
      </span>

      <p>{place.text}</p>
      <span className={style.button}>
        <button>
          <FaStar className={style.star} style={{ color: "yellow" }} />
          {place.rating}/10
        </button>
        <button>
          <CiCalendar />
          {place.duration}
        </button>
      </span>
      <div className={style.mapContainer}>
        <Map location={place.location.country} />
      </div>
    </div>
  );
};

export default Detail;
