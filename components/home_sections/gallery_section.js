import React from 'react';
import GalleryPreview from "../gallery_preview";
import {useGetPreviews} from "../../hooks/requests/usePreviews";
import MainColoredSection from "../../containers/main_colored_section";

export default function GallerySection(props) {
    const {previews, error} = useGetPreviews()
    return (
        <div id="gallery">
            <MainColoredSection bgClass="bg-light-grey">
                <span className="h2-text-lg h3-text text-black text-center">
                Галерея
                </span>
                <div className="d-flex flex-wrap mt-4 justify-content-around">
                    {
                        previews?.map((value, index, array) =>
                            <GalleryPreview link={value.link} preview={value.preview} key={value.id}>{value.text}</GalleryPreview>
                        )
                    }
                </div>
            </MainColoredSection>

        </div>
    );
}
