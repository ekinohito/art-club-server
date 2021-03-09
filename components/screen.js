import React, { useEffect, useState } from 'react';
import styles from './Screen.module.scss'

export default function Screen({ image }) {
    return (
            <section>
				<div style={{zIndex: 2, position: 'relative', display: 'inline-block', width: '100vw', height: '100vh', overflow: "hidden"}}>
					<img src={image} className={styles.screenImage}/>
				</div>
				<div className={styles.mainLogo}>
					<img src="/assets/images/logo-main.png"/>
				</div>	
            </section>
    )
}