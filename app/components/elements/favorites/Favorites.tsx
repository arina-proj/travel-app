import { useState } from "react";
import { IPlace } from "../../../ts/place";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState<IPlace[]>([])

     const addFavorite = (place: IPlace) => {
    if (!favorites.some(p => p.location.city === place.location.city)) {
      setFavorites(prev => [...prev, place]);
    }
  };
  return {favorites, addFavorite}
}

const Favorites = () => {
    return (
        <div>
            kvpvps
        </div>
    )
}

export default Favorites;