import React from 'react';
import Portal from "../components/portal";
import {useSpring, animated} from "react-spring";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const ScrollLocker = () => {
    useLockBodyScroll();
    return null;
}

export default function Modal({children, show}) {

    const {opacity} = useSpring({
        opacity: show ? 1: 0,
    })

    return (
        show
            ?
        <Portal>

            <animated.div className="fixed-top h-100 bg-modal" style={{opacity}}>
                <div className="container d-flex justify-content-center align-items-center h-100">
                    {children}
                </div>

            </animated.div>
            <ScrollLocker/>
        </Portal>
            :
            null
    )
}
