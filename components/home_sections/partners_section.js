import React from 'react';
import Partner from "../partner";
import MainColoredSection from "../../containers/main_colored_section";
import {useGetPartners} from "../../hooks/requests/usePartners";

export default function PartnersSection(props) {
    const {partners, error} = useGetPartners();
    return (
        <div id="partner">
            <MainColoredSection bgClass="bg-gradient">
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
