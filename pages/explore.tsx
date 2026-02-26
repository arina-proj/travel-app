import { FC } from "react";
import Heading from "../app/components/screens/place/Heading/Heading";
import Layout from "../app/components/common/Layout";
import Favorites from "../app/components/elements/favorites/Favorites";

const Explore: FC = () => {
  return (
    <Layout>
      <Heading />
      <Favorites/>
    </Layout>
  );
};

export default Explore;
