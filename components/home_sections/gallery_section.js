import React from 'react';
import Partner from "../partner";
import MainColoredSection from "../../containers/main_colored_section";
import GalleryPreview from "../gallery_preview";

export default function GallerySection(props) {
    const previews = [
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
        {
            link: '/',
            preview: 'kasting2020.jpg',
            text: 'KacTuHr'
        },
    ]
    return (
        <div id="gallery">
            <div className="container pt-5">
                <span className="h2-text-lg h3-text text-black text-left mb1">
                Галерея
                </span>
                <div className="d-flex flex-wrap mt-4 justify-content-around">
                    {
                        previews.map((value, index, array) =>
                            <GalleryPreview link={value.link} preview={value.preview} key={value.text}>{value.text}</GalleryPreview>
                        )
                    }
                </div>
            </div>

        </div>
    );
}
