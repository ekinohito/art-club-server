import React from 'react';
import Poster from "../poster";
import Slider from "../slider";
import {useGetPosters} from "../../hooks/requests/usePosters";
import MainColoredSection from "../../containers/main_colored_section";


export default function PosterSection() {
    const {posters, error} = useGetPosters();
    return (
        <div id="poster">
            <MainColoredSection bgClass="bg-light-grey">
                <div className="d-flex justify-content-between mb-4">
                    <span className="h3-text">
                        Афиша
                    </span>
                    <button className="gradient-button">
                        Посмотреть все
                    </button>
                </div>
                <Slider>
                    {posters?.map(poster => <Poster poster={poster} height={'auto'} key={poster.id}/>)}
                </Slider>
            </MainColoredSection>
        </div>
    )
}
