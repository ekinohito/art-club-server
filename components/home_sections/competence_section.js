import React from 'react';
import {useGetCompetence} from "../../hooks/requests/useCompetence";


export default function CompetenceSection() {
    const {competence, error} = useGetCompetence();
    return (
        <div className="py-5 bg-gradient text-center">
            <div className="d-flex flex-column container">
                <span className="h2-text-lg h3-text text-white">
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
            </div>

        </div>
    );
}
