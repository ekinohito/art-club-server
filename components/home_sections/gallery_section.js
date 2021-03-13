import React from 'react';
import GalleryPreview from "../gallery_preview";
import {useGetPreviews} from "../../hooks/requests/usePreviews";
import MainColoredSection from "../../containers/main_colored_section";
import Link from "next/link";

export default function GallerySection(props) {
    const {previews, error} = useGetPreviews()
    return (
        <div id="gallery">
            <MainColoredSection bgClass="bg-light-grey">
                <div className="d-flex justify-content-between">
                    <span className="h2-text-lg h3-text text-black">
                        Галерея
                    </span>
                    <Link href="/gallery">
                        <button className="gradient-button">
                            Посмотреть все
                        </button>
                    </Link>
                </div>

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
