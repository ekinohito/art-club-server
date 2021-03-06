import React from 'react';
import {useGetCompetence} from "../../hooks/requests/useCompetence";
import MainColoredSection from "../../containers/main_colored_section";
import Anchor from "../anchor";


export default function CompetenceSection(props) {
    const {competence, error} = useGetCompetence(props.competence);
    return (
        <div id="competence">
            <Anchor id="competence-section"/>
            <MainColoredSection bgClass="" style={{backgroundImage: "url(\"assets/images/gradient.jpg\")",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
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
