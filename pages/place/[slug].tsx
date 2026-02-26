import React from "react";
import { IPlace } from "../../app/ts/place";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Place from "../../app/components/screens/place/Place";
import { places } from "../api/places/index"; // Импортируем данные напрямую!

interface IPlacePage {
  place: IPlace;
}

const PlacePage: NextPage<IPlacePage> = ({ place }) => {
  return <Place place={place} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Используем импортированные данные вместо fetch
  const paths = places.map((place) => ({
    params: { slug: place.slug },
  }));
  
  return { 
    paths, 
    fallback: false 
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Проверяем наличие params и slug
  if (!params?.slug) {
    return { notFound: true };
  }

  // Ищем место по slug в импортированных данных
  const place = places.find(p => p.slug === params.slug);
  
  if (!place) {
    return { notFound: true };
  }

  return { 
    props: { place } 
  };
};

export default PlacePage;
