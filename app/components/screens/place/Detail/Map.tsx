import { FC } from "react";
import WorldData from "../../../../../public/features.json";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

import { FaMapMarkerAlt } from "react-icons/fa";
interface MapProps {
  location: string;
}

const Map: FC<MapProps> = ({ location }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        margin: "0 auto", // Центрирование контейнера
      }}
    >
      <ComposableMap
        projectionConfig={{
          center: [275, 60],
        }}
        width={240}
        height={140}
      >
        <ZoomableGroup zoom={0.3}>
          <Geographies geography={WorldData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isCurrent = geo.properties.name === location;
                console.log(location);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isCurrent ? "#eb601e" : "#39373b"}
                    stroke="#607D8B"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#CFD8DC", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#eb601e", // Цвет иконки
          fontSize: "24px",
          zIndex: 10, // Чтобы иконка была поверх карты
        }}
      >
        <FaMapMarkerAlt /> {/* Или ваш компонент иконки */}
      </div>
    </div>
  );
};

export default Map;
