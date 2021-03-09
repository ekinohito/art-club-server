import React from 'react';
import Partner from "../partner";
import MainColoredSection from "../../containers/main_colored_section";

export default function PartnerSection(props) {
    return (
        <div id="partner">
            <MainColoredSection bgClass="bg-gradient">
                <span className="h2-text-lg h3-text text-white text-center mb1">
                Наши друзья
                </span>
                <div className="d-flex flex-md-row flex-column justify-content-around mt-4">
                    <Partner link="https://vk.com/studsovet_bmstu" image="/assets/icons/studsov.jpg">
                        Студенческий совет
                    </Partner>
                    <Partner link="https://www.bmstu.ru/" image="/assets/icons/gerb_mgtu.png">
                        МГТУ им. Н. Э. Баумана
                    </Partner>
                    <Partner link="https://vk.com/profkom_bmstu" image="/assets/icons/profkom.jpg">
                        Профсоюз студентов <br/> МГТУ им. Н.Э. Баумана
                    </Partner>
                </div>
            </MainColoredSection>

        </div>
    );
}
