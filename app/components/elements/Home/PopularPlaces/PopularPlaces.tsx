import { FC } from "react";
import style from "./PopularPlaces.module.scss";
import { IPlace } from "../../../../ts/place";
import Link from "next/link";
interface IPopularPlaces {
  places: IPlace[];
}

const PopularPlaces: FC<IPopularPlaces> = ({ places }) => {
  return (
    <div className={style.wrapper}>
      <h2>Popular places</h2>
        {places.length > 0 ? (
            places.map((place) => (
                <Link
                    href={`/place/${place.slug}`}
                    key={`${place.slug}-${place.location.city}`}
                    className={style.item}
                    style={{ backgroundImage: `url(${place.imagePath})` }}
                >
                    <div className={style.heading}>
                        {place.location.city + ", " + place.location.country}
                    </div>
                </Link>
            ))):  (
      <div style={{color: "#807e7f", fontSize: "20px", fontWeight: "bold", fontFamily: "initial"}}>Location not found!</div>)
        }
    </div>
  );
};

export default PopularPlaces;
