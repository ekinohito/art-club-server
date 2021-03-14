import React from 'react';
import Portal from "./portal";
import {animated, useTransition} from "react-spring";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const ScrollLocker = () => {
    useLockBodyScroll();
    return null;
}

export default function Modal({children, show, closeModal}) {

    const transitions = useTransition(show, null, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {opacity: 1}
    })

    return (
        transitions.map(({item, props, key}) =>
            item &&
            <Portal>
                <animated.div className="fixed-top h-100 bg-modal" style={props}>
                    <div className="container h-100">
                        {children}
                    </div>

                </animated.div>
                <ScrollLocker/>
            </Portal>
        )
    )
}
