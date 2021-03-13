import React, {useEffect} from 'react';
import Portal from "../components/portal";
import {useSpring, animated} from "react-spring";
import useLockBodyScroll from "../hooks/useLockBodyScroll";

const ScrollLocker = () => {
    useLockBodyScroll();
    return null;
}

export default function Modal({children, show, closeModal}) {

    const {opacity} = useSpring({
        opacity: show ? 1: 0,
    });

    // useEffect(() => closeModal(), [show])

    return (
        show
            ?
        <Portal>

            <animated.div className="fixed-top h-100 bg-modal" style={{opacity}} onClick={closeModal}>
                <div className="container h-100">
                    {children}
                </div>

            </animated.div>
            <ScrollLocker/>
        </Portal>
            :
            null
    )
}
