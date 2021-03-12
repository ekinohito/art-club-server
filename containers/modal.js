import React from 'react';
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
    })

    return (
        show
            ?
        <Portal>

            <animated.div className="fixed-top h-100 bg-modal" style={{opacity}} onClick={() => closeModal()}>
                <button onClick={() => {
                    closeModal();
                    console.log('123')
                }}>123</button>
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
