import React from 'react';
import Poster from "../poster";
import Slider from "../slider";
import {useGetPosters} from "../../hooks/requests/usePosters";
import MainColoredSection from "../../containers/main_colored_section";
import Link from "next/link";
import {PosterDescriptionProvider} from "../../context/poster_description";

export default function PosterSection(props) {
    const {posters, error} = useGetPosters(props.posters);
    return (
        <div id="poster">
            <MainColoredSection bgClass="bg-light-grey">
                <div className="d-flex justify-content-between mb-4">
                    <span className="h3-text">
                        Афиша
                    </span>
                    <Link href="/posters">
                        <button className="gradient-button">
                            Посмотреть все
                        </button>
                    </Link>

                </div>
                <PosterDescriptionProvider>
                    <Slider>
                        {posters.map(poster =>
                            <div className="p-1 p-md-3 p-xl-4 h-100 bg-light-grey" key={poster.id}>
                                <Poster poster={poster} />
                            </div>
                        )
                        }
                    </Slider>
                </PosterDescriptionProvider>

            </MainColoredSection>
        </div>
    )
}
