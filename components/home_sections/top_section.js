import React from 'react';
import Image from "next/image";

import styles from './TopSection.module.css';

export default function TopSection() {
    return (
        <div className="d-flex justify-content-center align-items-center position-relative w-100 vh-100">
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
                        zIndex: 999
                    }}
                    className="mx-4"
                >
                    <img
                        src="/assets/images/top-section-image.png"
                        width="100%"
                        alt="art club"/>
                </div>

        </div>
    )
}
