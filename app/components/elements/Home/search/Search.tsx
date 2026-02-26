import { FC, ChangeEvent } from "react";
import style from "./Search.module.scss";
import { TypeSetState } from "../../../../ts/common";
import { IPlace } from "../../../../ts/place";

interface ISearch {
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[];
  searchTerm: string;
  setSearchTerm: TypeSetState<string>;
}

const Search: FC<ISearch> = ({
  setPlaces,
  initialPlaces,
  searchTerm,
  setSearchTerm,
}) => {
  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (value) {
      setPlaces(
        initialPlaces.filter((place) => {
        
          const city = place.location.city.toLowerCase();
          const country = place.location.country.toLowerCase();
          return city.includes(value) || country.includes(value);
        })
      );
    } else {
      setPlaces(initialPlaces);
    }
  };

  return (
    <div className={style.search}>
      <span className="material-icons-outlined">search</span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => handleClick(e)}
        placeholder="Search places..."
      />
    </div>
  );
};

export default Search;
