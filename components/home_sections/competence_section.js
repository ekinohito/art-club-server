import React from 'react';
import {useGetCompetence} from "../../hooks/requests/useCompetence";
import MainColoredSection from "../../containers/main_colored_section";


export default function CompetenceSection() {
    const {competence, error} = useGetCompetence();
    return (
        <div id="competence">
            <MainColoredSection bgClass="bg-gradient">
                <span className="h2-text-lg h3-text text-white text-center">
                    Чем мы занимаемся?
                </span>
                <div className="d-flex flex-md-row flex-column justify-content-around mt-5">
                    {
                        competence?.map(item =>
                            <a
                                className="d-flex flex-column align-items-center mb-md-0 mb-4 text-decoration-none opacity85-on-hover"
                                key={item.name}
                            >
                                <img
                                    src={`/data/competence/${item.iconName}`}
                                    height={70}
                                    width={70}
                                    alt={item.name}
                                />
                                <span className="h4-text text-white mt-3">{item.name}</span>
                            </a >
                        )
                    }
                </div>
            </MainColoredSection>
        </div>
    );
}
