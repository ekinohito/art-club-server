import React from 'react';
import Link from "next/link";
import {useNavigation} from "../context/navigation";
import styles from "./Navigation.module.scss";
import {animated, config, useSpring} from "react-spring";

const sections = [
    {name: "Главная", href: "/#"},
    {name: "Афиша", href: "/#poster-section"},
    {name: "Чем мы занимаемся?", href: "/#competence-section"},
    {name: "Резиденты", href: "/#resident-section"},
    {name: "Галерея", href: "/#gallery-section"},
    {name: "Контакты", href: "/#contacts-section"},
    //{name: "О нас!", href: "/about#"}
]


export default function Navigation() {
    const {showNav, closeNav} = useNavigation();

    const {transform} = useSpring({
        transform: `translateX(${showNav ? 0 : 100}%)`,
        config: config.default
    })

    return (
        <animated.div
            style={{transform}}
            className={`position-fixed bg-nav-purple h-100 p-4 ${styles.navigation}`}
        >
            <div className="d-flex flex-column">
                <div className="align-self-end">
                    <button className="bg-transparent" onClick={closeNav}>
                        <img src="/assets/icons/cross.png" alt="cross" width={25} height={25}/>
                    </button>
                </div>
                <span className="h3-text text-white">
                    Навигация
                </span>
                <div className="d-flex flex-column mt-2">
                    {
                        sections.map((section, index) =>
                            <Link
                                href={section.href}
                                key={index}
                            >
                                <span
                                    className={`text-decoration-none px-3 py-2 subtitle-text ${styles.navItem}`}
                                    onClick={closeNav}
                                >
                                    {section.name}
                                </span>
                            </Link>
                        )
                    }
                </div>
            </div>
        </animated.div>

    )

}
