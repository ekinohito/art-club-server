import React from 'react';
import GalleryPreview from "../gallery_preview";
import {useGetPreviews} from "../../hooks/requests/usePreviews";
import MainColoredSection from "../../containers/main_colored_section";
import Link from "next/link";
import Anchor from "../anchor";
import OutlineGradientButton from "../OutlineGradientButton";

export default function GallerySection(props) {
    const {previews, error} = useGetPreviews()
    return (
        <div id="gallery">
            <Anchor id="gallery-section"/>
            <MainColoredSection bgClass="bg-light-grey">
                <span className="h2-text-lg h3-text text-center mb-4 gradient-text">
                    Галерея
                </span>
                <div className="d-flex flex-wrap my-2 justify-content-around">
                    {
                        previews?.map((value, index, array) =>
                            <GalleryPreview link={value.link} preview={value.preview} key={value.id}>{value.text}</GalleryPreview>
                        )
                    }
                </div>
                <OutlineGradientButton href={"/gallery"}>
                    Посмотреть все
                </OutlineGradientButton>
            </MainColoredSection>

        </div>
    );
}
