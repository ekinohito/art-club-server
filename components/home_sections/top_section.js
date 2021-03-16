import React from 'react';
import Image from "next/image";

import styles from "./TopSection.module.scss";

export default function TopSection({children}) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center position-relative w-100 vh-100 py-5" id="top">
                
                <div className="position-absolute">
                    {children}
                </div>
                <div
                    style={{
                        zIndex: 99
                    }}
                    className="mx-4 flex-grow-1 d-flex justify-content-center align-items-center"
                >
                    <img
                        src="/assets/images/top-section-image.png"
                        width="100%"
                        alt="art club"
                    />


                </div>
                <a href="#poster-section">
                    <img src="/assets/icons/arrow_down.png" alt="arrow" className={styles.arrow} width={50}/>
                </a>

        </div>
    )
}
