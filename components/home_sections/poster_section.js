import React from 'react';
import Poster from "../poster";
import Slider from "../slider";
import {useGetPosters} from "../../hooks/requests/usePosters";


export default function PosterSection() {
    const {posters, error} = useGetPosters();
    return (
        <div className="bg-light-grey py-5" style={{zIndex: 1}} id="poster">
            <div className="container d-flex flex-column">
                <div className="d-flex justify-content-between mb-4">
                    <span className="h3-text">
                        Афиша
                    </span>
                    <button className="gradient-button">
                        Посмотреть все
                    </button>
                </div>
                <div>
                    <Slider>
                        {posters?.map(poster => <Poster poster={poster} height={'auto'} key={poster.id}/>)}
                    </Slider>
                </div>

            </div>

        </div>
    )
}
