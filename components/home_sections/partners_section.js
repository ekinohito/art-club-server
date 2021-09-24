import React from 'react';
import Partner from "../partner";
import MainColoredSection from "../../containers/main_colored_section";
import {useGetPartners} from "../../hooks/requests/usePartners";
import Anchor from "../anchor";

export default function PartnersSection(props) {
    const {partners, error} = useGetPartners(props.partners);
    return (
        <div id="partner">
            <Anchor id="partner-section"/>
            <MainColoredSection bgClass="" style={{backgroundImage: "url(\"assets/images/gradient.jpg\")",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"}}>
                <span className="h2-text-lg h3-text text-white text-center mb1">
                Наши друзья
                </span>
                <div className="d-flex flex-md-row flex-column justify-content-around mt-4">
                    {partners?.map((item) =>
                        <Partner link={item.link} image={item.image} key={item.id}>
                            {item.title}
                        </Partner>)}
                </div>
            </MainColoredSection>

        </div>
    );
}
