import React from 'react';
import Poster from "../poster";
import Slider from "../slider";
import {useGetPosters} from "../../hooks/requests/usePosters";
import MainColoredSection from "../../containers/main_colored_section";
import Link from "next/link";
import {PosterDescriptionProvider} from "../../context/poster_description";
import Anchor from "../anchor";
import OutlineGradientButton from "../OutlineGradientButton";

export default function PosterSection(props) {
    const {posters, error} = useGetPosters(props.posters);
    return (
        <div id="poster">
            <Anchor id="poster-section"/>
            <MainColoredSection bgClass="bg-light-grey">
                <span className="h2-text-lg h3-text text-center gradient-text">
                    Афиша
                </span>
                <PosterDescriptionProvider>
                    <div className="d-none d-lg-block">
                        <Slider centerMode>
                            {posters?.map(poster =>
                                <div className="p-1 p-md-3 p-xl-4 h-100 bg-light-grey" key={poster.id}>
                                    <Poster poster={poster}/>
                                </div>)
                            }
                        </Slider>
                    </div>
                    <div className="d-block d-lg-none">
                        <Slider>
                            {posters?.map(poster =>
                                <div className="p-1 p-md-3 p-xl-4 h-100 bg-light-grey" key={poster.id}>
                                    <Poster poster={poster}/>
                                </div>)
                            }
                        </Slider>
                    </div>
                </PosterDescriptionProvider>
                <OutlineGradientButton href={"/posters"}>
                    Посмотреть все
                </OutlineGradientButton>
            </MainColoredSection>
        </div>
    )
}
