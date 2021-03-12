import React from 'react';
import styles from './GalleryPreview.module.scss'

export default function GalleryPreview({preview, link, children}) {
    return (
        <div className="col-4 p-0">
            <div className="m-2 mt-4 overflow-hidden" style={{borderRadius: "20px"}}>
                <a href={link} className={styles.recentWork} style={{
                    backgroundImage: `url("/data/gallery/${preview}")`}} target="_blank">
                    <button className={`btn btn-outline-light`}>{children}</button>
                </a>
            </div>
        </div>
    );
}