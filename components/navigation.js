import React from 'react';
import ReactDOM from 'react-dom';
import {useNavigation} from "../context/navigation";
import styles from "./Navigation.module.scss";
import {animated, config, useTransition} from "react-spring";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const sections = [
    {name: "Главная", href: "#"},
    {name: "Афиша", href: "#poster"},
    {name: "Чем мы занимаемся?", href: "#competence"},
    {name: "Резиденты", href: "#resident"},
    {name: "Галерея", href: "#gallery"},
    {name: "Контакты", href: "#contacts"},
    {name: "О нас!", href: "/about"}
]


export default function Navigation() {
    const {showNav, setShowNav} = useNavigation();


    const transition = useTransition(showNav, null, {
        from: {
            transform: "translateX(100%)"
        },
        enter: {
            transform: "translateX(0)"
        },
        leave: {
            transform: "translateX(100%)"
        },
        config: config.default
    });
    return transition.map(({item, key, props}) =>
        item ?
                <animated.div key={key} style={props} className={`position-fixed bg-nav-purple h-100 p-4 ${styles.navigation}`}>
                    <div className="d-flex flex-column">
                        <div className="align-self-end">
                            <button className="bg-transparent" onClick={() => setShowNav(false)}>
                                <img src="/assets/icons/cross.png" alt="cross" width={25} height={25}/>
                            </button>
                        </div>
                        <span className="h3-text text-white">
                            Навигация
                        </span>
                        <div className="d-flex flex-column mt-2">
                            {
                                sections.map((section, index) =>
                                    <a
                                        className={`text-decoration-none py-2 px-3 subtitle-text ${styles.navItem}`}
                                        href={section.href}
                                        key={index}
                                        onClick={() => setShowNav(false)}
                                    >
                                        {section.name}
                                    </a>
                                )
                            }
                        </div>
                    </div>
                </animated.div>
            :
            null
    )

}
