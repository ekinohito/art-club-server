import React from 'react';
import useSWR from "swr";
import Slider from "../slider";
import {useGetResidents} from "../../hooks/requests/useResidents";
import MainColoredSection from "../../containers/main_colored_section";

export default function ResidentSection(props) {
    const {residents, error} = useGetResidents(props.residents);

    return (
        <div id="resident">
            <MainColoredSection bgClass="bg-light-grey">
                <span className="h2-text-lg h3-text text-center mb-4">
                    Наши резиденты
                </span>
                <Slider>
                    {residents.map(resident =>
                        <a
                            key={resident.id}
                        >
                            <div
                                className="px-3 py-1 bg-light-grey h-100">
                                <img src={resident.iconName} alt={resident.name} style={{borderRadius: "50%"}}/>
                            </div>
                        </a>
                    )}
                </Slider>
            </MainColoredSection>
        </div>
    );
}
