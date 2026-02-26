import { FC } from "react";
import { IPlace } from "../../../ts/place";
import Layout from "../../common/Layout";
import Heading from "./Heading/Heading";

import Wrapper from "./Wrapper/Wrapper";
import Detail from "./Detail/Detail";
import BookTrip from "./BookTrip/BookTrip";

interface IPlacePage{
    place: IPlace
}

const Place: FC<IPlacePage> = ({place}) =>{
    return (
    <Layout >
        <Wrapper imagePath={place.imagePath}>
            <Heading /* place={place} *//>
            <Detail place={place}/>
            <BookTrip/>
        </Wrapper>
    </Layout>
    )
}

export default Place
