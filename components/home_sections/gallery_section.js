import React from 'react';
import GalleryPreview from "../gallery_preview";
import {useGetPreviews} from "../../hooks/requests/usePreviews";

export default function GallerySection(props) {
    const {previews, error} = useGetPreviews()
    return (
        <div id="gallery">
            <div className="container pt-5">
                <span className="h2-text-lg h3-text text-black text-left mb1">
                Галерея
                </span>
                <div className="d-flex flex-wrap mt-4 justify-content-around">
                    {
                        previews?.map((value, index, array) =>
                            <GalleryPreview link={value.link} preview={value.preview} key={value.text}>{value.text}</GalleryPreview>
                        )
                    }
                </div>
            </div>

        </div>
    );
}
