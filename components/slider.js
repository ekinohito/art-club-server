import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Poster from "./poster"; // requires a loader

export default function Slider({posters}) {

    return (
        <Carousel centerMode centerSlidePercentage={40}>
            {posters.map(poster => <Poster poster={poster} height={'auto'} key={poster.id}/>)}
        </Carousel>
    )
}
