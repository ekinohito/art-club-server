import React from 'react';
import Portal from "./portal";
import {animated, useTransition} from "react-spring";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const ScrollLocker = () => {
    useLockBodyScroll();
    return null;
}

export default function Modal({children, show, closeModal}) {

    const transitions = useTransition(show,{
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 0}
    })

    return (
        transitions(({opacity}, item) =>
            item &&
            <Portal>
                <animated.div className="fixed-top h-100 bg-modal" style={{opacity}}>
                    <div className="container h-100">
                        {children}
                    </div>

                </animated.div>
                <ScrollLocker/>
            </Portal>
        )
    )
}
