import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider({children, centerMode}) {
    return (
        <div
            className="px-0 px-md-5 not-hidden">
            <Carousel
                centerMode={centerMode}
                swipeable
                emulateTouch
                swipeScrollTolerance={5}
                centerSlidePercentage={33}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                selectedItem={1}
                renderArrowPrev={(clickHandler, hasPrev, label)=>
                    <button
                        className="control-arrow control-prev d-none d-md-block"
                        style={{borderRadius: '50px', top: "40%", bottom: "40%", left: "-75px", width: "80px", height: "80px"}}
                        onClick={clickHandler}
                    />
                }
                renderArrowNext={(clickHandler, hasPrev, label)=>
                <button
                    className="control-arrow control-next d-none d-md-block"
                    style={{borderRadius: '50px', top: "40%", bottom: "40%", right: "-75px", width: "80px", height: "80px"}}
                    onClick={clickHandler}
                />
                }>
                {children}
            </Carousel>

        </div>
    )
}
