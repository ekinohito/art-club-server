import React from 'react';
import styles from './GalleryPreview.module.scss'

export default function GalleryPreview({preview, link, children}) {
    return (
        <div className="col-4 p-2 pt-4 ">
            <a href={link} className={styles.recentWork} style={{
                backgroundImage: `url("/data/gallery/${preview}")`}} target="_blank">
                <button className={`btn btn-outline-light`}>{children}</button>
            </a>
        </div>


    );
}
