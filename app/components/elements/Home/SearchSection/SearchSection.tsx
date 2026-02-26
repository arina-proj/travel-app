import { FC, useState } from "react";
import style from "./SearchSection.module.scss";
import Search from "../search/Search";
import Filter from "../../filters/Filters";
import mapImage from "../../../../../assets/image/map.jpg";
import { TypeSetState } from "../../../../ts/common";
import { IPlace } from "../../../../ts/place";

interface ISearchSection{
  setPlaces: TypeSetState<IPlace[]>;
  initialPlaces: IPlace[]
}

const SearchSection: FC<ISearchSection> = ({setPlaces, initialPlaces}) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <section
      className={style.section}
      style={{ backgroundImage: `url("${mapImage.src}")` }}
    >
      <div>
        <h1>best places for trip</h1>
        <Search setPlaces={setPlaces} initialPlaces={initialPlaces} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Filter searchTerm={searchTerm} initialPlace={initialPlaces} setPlaces={setPlaces}/>
      </div>
    </section>
  );
};

export default SearchSection;
