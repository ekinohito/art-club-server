import React from 'react';
import styles from './Partner.module.scss'

export default function Partner({image, children, link}) {
    return (
        <a
            className="d-flex flex-column col align-items-center mb-md-0
            mb-4 text-decoration-none opacity85-on-hover"
            href={link}
        >
            <img className={`${styles.partnerLogo} mb-3`} src={image} alt={children}/>
            <span className="span-big-text text-white">
                {children}
            </span>
        </a>
    );
}
