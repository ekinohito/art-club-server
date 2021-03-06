import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider({children}) {

    return (
        <Carousel
            centerMode
            centerSlidePercentage={33}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay={true}
            selectedItem={1}>
            {children}
        </Carousel>
    )
}
