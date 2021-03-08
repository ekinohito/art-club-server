import React from 'react';
import styles from './Partner.module.scss'

export default function Partner({image, children, link}) {
    return (
        <a
            className={`d-flex flex-column align-items-center mb-md-0 mb-4 text-decoration-none ${styles.partner}`}
            href={link}
        >
            <img className={styles.partnerLogo} src={image} alt={children}/>
            <span className="span-big-text text-white">
                {children}
            </span>
        </a>
    );
}
