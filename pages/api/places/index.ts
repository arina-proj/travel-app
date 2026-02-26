import { NextApiRequest, NextApiResponse } from "next";
import { IPlace } from "../../../app/ts/place";
export const places: IPlace[] = [
  {
    slug: "tokyo",
    location: { city: "Kyoto", country: "Japan" },
    imagePath: "/images/places/japan.png",
    description: "", // убрать //
    rating: 5,
    duration: "10 day",
    distance: 10453,
    googleMapLink: "s",
    mapImage: "", // delete // 
    text: "Kyoto is considered the cultural capital of Japan and a major tourist destination. It is home to numerous Buddhist temples",
  },
  
  {
    slug: "italy",
    location: { city: "Venezia", country: "Italy" },
    imagePath: "/images/places/italy.png",
    description: "",
    rating: 5,
    duration: "7 day",
    distance: 9153,
    googleMapLink: "s",
    mapImage: "",
    text: "Venice, the floating city of canals and bridges, is famous for its Gothic palaces, St. Mark's Basilica, and romantic gondola rides through its watery streets"
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(places);
}
