import React from 'react';
import styles from './Footer.module.scss';
import Anchor from "./anchor";


export default function Footer() {
    return (

        <div className="bg-dark-purple py-5" id="contacts">
            <Anchor id="contacts-section"/>
            <div className="container d-flex flex-column">
                <span className="text-center text-white h1-text-lg h2-text mb-5">
                    Контакты
                </span>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.239565883467!2d37.68983411604689!3d55.77171099800069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535633c448a4b%3A0xff3bfce61f0b5cba!2z0KDRg9Cx0YbQvtCy0YHQutCw0Y8g0L3QsNCxLiwgMi8xOCwg0JzQvtGB0LrQstCwLCAxMDUwODI!5e0!3m2!1sru!2sru!4v1603543496417!5m2!1sru!2sru"
                    style={{border: 0, borderRadius: "20px"}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0"
                    width="100%" height="450" frameBorder="0"
                    className="mb-4"
                />
                <div className="d-flex justify-content-between">
                    <div className={`text-white span-big-text mr-2 ${styles.footText}`}>
                        Адрес: {""}
                        <a
                            href="https://www.google.com/maps/place/%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B1.,+2%2F18,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+105082/@55.771708,37.6898341,17z/data=!3m1!4b1!4m5!3m4!1s0x46b535633c448a4b:0xff3bfce61f0b5cba!8m2!3d55.771708!4d37.6920228"
                            target="_blank"
                            className="text-decoration-none"
                        >
                            Москва, Рубцовская наб., 2/18
                        </a><br/>
                        Телефон: (499) 263-62-72, (499) 263-62-61<br/>
                        E-mail: culture@bmstu.ru
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <span className="span-big-text text-white" style={{textAlign: "end"}}>
                            © Copyright BMSTU 2020
                        </span>
                        <div className="d-flex justify-content-end">
                            <a href="https://vk.com/artclub.bmstu" target="_blank" className="mr-1">
                                <img src="/assets/icons/vk.png" width="35" height="35"/>
                            </a>
                            <a href="https://www.instagram.com/artclubbmstu/" target="_blank">
                                <img src="/assets/icons/inst.png" width="42" height="35"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
