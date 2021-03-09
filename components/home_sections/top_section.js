import React from 'react';
import Image from "next/image";

import styles from "./TopSection.module.scss";

export default function TopSection() {
    return (
        <div className="d-flex justify-content-center align-items-center position-relative w-100 vh-100" id="top">
                <video
                    src="/assets/webm/animated-bg.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="position-absolute"
                />
                <div
                    style={{
                        zIndex: 99
                    }}
                    className="mx-4 d-flex flex-column align-items-center"
                >
                    <img
                        src="/assets/images/top-section-image.png"
                        width="100%"
                        alt="art club"
                    />
                    <a href="#poster">
                        <img src="/assets/icons/arrow_down.png" alt="arrow" className={`mt-5 ${styles.arrow}`} width={50}/>
                    </a>

                </div>

        </div>
    )
}
