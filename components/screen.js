import React, { useEffect, useState } from 'react';
import styles from './Screen.module.scss'

export default function Screen({ image }) {
    return (
            <div className="d-flex flex-column justify-content-center align-items-center position-relative w-100 vh-100">
				<div
					style={{zIndex: 2, 
					position: 'relative', 
					display: 'inline-block', 
					width: '100vw', 
					height: '100vh', 
					overflow: "hidden"}}>
					<div className={styles.screenImage}/>
				</div>
				<div className={styles.mainLogo}>
					<img src="/assets/images/logo-main.png"/>
				</div>	
            </div>
    )
}
