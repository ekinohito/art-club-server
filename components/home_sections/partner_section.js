import React from 'react';
import Partner from "../partner";

export default function PartnerSection(props) {
    return (
        <div className="py-5 bg-gradient" id="partner">
            <div className="container text-center">
                <span className="h2-text-lg h3-text text-white">
                    Наши друзья
                </span>
                <section className="block-body">
                    <div className="d-flex flex-md-row flex-column justify-content-around mt-5">
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
                </section>
            </div>
        </div>
    );
}
