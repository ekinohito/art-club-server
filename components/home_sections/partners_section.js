import React from 'react';
import Partner from "../partner";
import styles from './PartnersSection.module.scss'

export default function PartnersSection(props) {
    return (
        <div className={`${styles.contentBlock} ${styles.partners} py-5 bg-gradient`}>
            <div className="container text-center">
                <span className="h2-text text-white">
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
