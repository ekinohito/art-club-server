import React from 'react';
import useSWR from "swr";
import Slider from "../slider";
import {useGetResidents} from "../../hooks/requests/useResidents";
import MainColoredSection from "../../containers/main_colored_section";
import Poster from "../poster";
import {PosterDescriptionProvider} from "../../context/poster_description";

export default function ResidentSection(props) {
    const {residents, error} = useGetResidents(props.residents);

    return (
        <div id="resident">
            <MainColoredSection bgClass="bg-light-grey">
                <span className="h2-text-lg h3-text text-center mb-4">
                    Наши резиденты
                </span>
                <div className="d-none d-lg-block">
                    <Slider centerMode>
                        {residents?.map(resident =>
                            <a key={resident.id}> <div
                                className="px-3 py-1 bg-light-grey h-100">
                                <img src={resident.iconName} alt={resident.name} style={{borderRadius: "50%"}}/>
                            </div></a>)}
                    </Slider>
                </div>
                <div className="d-block d-lg-none">
                    <Slider>
                        {residents?.map(resident =>
                            <a key={resident.id}> <div
                                className="px-3 py-1 bg-light-grey h-100">
                                <img src={resident.iconName} alt={resident.name} style={{borderRadius: "50%"}}/>
                            </div></a>)}
                    </Slider>
                </div>

            </MainColoredSection>
        </div>
    );
}
