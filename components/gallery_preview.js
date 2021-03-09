import React from 'react';
import styles from './GalleryPreview.module.scss'

export default function GalleryPreview({preview, link, children}) {
    return (
        <div className="col-sm-4">
            <a href={link} className={styles.recentWork}style={{
                backgroundImage: `url("/data/gallery/${preview}")`}} target="_blank">
                <span className="btn btn-o-white">{children}</span>
            </a>
        </div>


    );
}
