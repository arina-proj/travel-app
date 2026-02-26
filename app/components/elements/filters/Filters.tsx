import { FC, useState } from "react";
import style from "./Filters.module.scss";
import cn from "classnames";
import { IPlace } from "../../../ts/place";
import { TypeSetState } from "../../../ts/common";
import uniqBy from "lodash/uniqBy"

interface IFilter {
  searchTerm: string;
  initialPlace: IPlace[],
  setPlaces: TypeSetState<IPlace[]>;
}


const Filter: FC<IFilter> = ({ initialPlace, setPlaces }) => {
  const [filter, setFilter] = useState("");

  

  const ClickFilter = (location: string) => {
    setFilter(location)
    setPlaces(
      initialPlace.filter(place=>
        place.location.country.toLowerCase()===location.toLowerCase() 
      )
    )
  }

  return (
    <div className={style.wrapper}>
      {uniqBy(initialPlace, "location.country").map((place) => (
        <button
          onClick={() => ClickFilter(place.location.country)}
          key={place.location.country}
          className={cn({
            [style.active]: place.location.country === filter,
          })}
        >
          {place.location.country}
        </button>
      ))}
    </div>
  );
};

export default Filter;
