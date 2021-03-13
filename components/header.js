import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigation} from "../context/navigation";
import Link from 'next/link'

export default function Header({animated = true}) {
    const [transparent, setTransparent] = useState(animated);
    const {showNav, openNav} = useNavigation();
    const ref = useRef(null);

    const scrollHandler = useCallback(() => {
        if (ref.current.offsetHeight + window.pageYOffset > window.innerHeight)
            setTransparent(false)
        else
            setTransparent(true)
    }, [setTransparent, ref]);

    useEffect(() => {
        if (!animated) return;

        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return (
        <div
            className={`d-flex justify-content-between px-4 fixed-top ${transparent ? "py-4" : " py-3 bg-header-gradient"}`}
            ref={ref}
            style={{
                transition: "padding .5s",
                zIndex: 100
            }}
        >
            <div
                style={{
                    opacity: transparent ? 0 : 1,
                    transition: "visibility .5s, opacity .5s",
                    visibility: transparent ? "hidden" : "visible",
                    cursor: 'pointer'
                }}
            >
                <Link href="/">
                    <img
                        src="/assets/icons/logo.png"
                        alt="logo"
                        width={35}
                        height={35}
                    />
                </Link>
            </div>


            {
                !showNav
                    ?
                    <button className="bg-transparent" onClick={openNav}>
                        <img
                            src="/assets/icons/menu.png"
                            alt="menu"
                            height={28}
                            width={28}
                        />
                    </button>
                    :
                    null
            }

        </div>
    )
}
