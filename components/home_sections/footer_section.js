import React from 'react';
import styles from './FooterSection.module.scss';


export default function FooterSection() {
    return (
        <div className={`${styles.contentBlock} ${styles.footer}`}>
            <div style={{padding: "0px 10%"}}>
                <header className={`block-heading clearfix ${styles.h1Flex} text-center`} style={{marginBottom: "3%"}}>
                    <h1 style={{cursor: "default", color: "white"}} className={styles.h1}>Контакты</h1>
                </header>
                <div className="row">
                    <div className={`${styles.kSpecial} ${styles.adaptMap} w-100`}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.239565883467!2d37.68983411604689!3d55.77171099800069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b535633c448a4b%3A0xff3bfce61f0b5cba!2z0KDRg9Cx0YbQvtCy0YHQutCw0Y8g0L3QsNCxLiwgMi8xOCwg0JzQvtGB0LrQstCwLCAxMDUwODI!5e0!3m2!1sru!2sru!4v1603543496417!5m2!1sru!2sru"
                            style={{border: 0, borderRadius: "20px"}} allowFullScreen="" aria-hidden="false"
                            tabIndex="0"
                            width="100%" height="450" frameBorder="0"/>
                    </div>
                </div>
                <div className="row">
                    <div className={styles.footText} style={{marginTop: "50px"}}>Адрес: <a
                        href="https://www.google.com/maps/place/%D0%A0%D1%83%D0%B1%D1%86%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B1.,+2%2F18,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+105082/@55.771708,37.6898341,17z/data=!3m1!4b1!4m5!3m4!1s0x46b535633c448a4b:0xff3bfce61f0b5cba!8m2!3d55.771708!4d37.6920228"
                        target="_blank">
                        Москва, Рубцовская наб., 2/18</a><br/>
                        Телефон: (499) 263-62-72, (499) 263-62-61<br/>
                        E-mail: culture@bmstu.ru
                    </div>
                    <div className={`text-right ${styles.footText}`}>
                        <div style={{cursor: "default", marginTop: "50px", paddingBottom: "15px"}}>© Copyright BMSTU
                            2020
                        </div>
                        <a href="https://vk.com/artclub.bmstu" target="_blank">
                            <img src="/assets/icons/vk.png" width="35" height="35"/>
                        </a>
                        <a href="https://www.instagram.com/artclubbmstu/" target="_blank">
                            <img src="/assets/icons/inst.png" width="42" height="35"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
