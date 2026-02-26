import { GetStaticProps, NextPage } from "next";
import Layout from "../app/components/common/Layout";
import { IPlace } from "../app/ts/place";
import SearchSection from "../app/components/elements/Home/SearchSection/SearchSection";
import PopularPlaces from "../app/components/elements/Home/PopularPlaces/PopularPlaces";
import { useState } from "react";

// Импортируем данные из правильного пути!
import { places as placesData } from "./api/places/index";  // или просто "./api/places"

interface IHome {
  initialPlaces: IPlace[];
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {
  const [places, setPlaces] = useState(initialPlaces);
  
  return (
    <Layout>
      <SearchSection setPlaces={setPlaces} initialPlaces={initialPlaces} />
      <PopularPlaces places={places} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    return {
      props: { 
        initialPlaces: placesData 
      },
    };
  } catch (error) {
    console.error("Error loading places:", error);
    return {
      props: { 
        initialPlaces: [] 
      },
    };
  }
};

export default Home;