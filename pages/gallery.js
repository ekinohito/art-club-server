import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import Screen from "../components/screen";
import AboutParallaxSection from "../containers/about_parallax_section";
import MainColoredSection from "../containers/main_colored_section";
import {useGetPreviews} from "../hooks/requests/usePreviews";
import GalleryPreview from "../components/gallery_preview";
import ImageGrid from "../containers/image_grid";

export default function Gallery() {
    const {previews, error} = useGetPreviews()
    return (
        <div className="d-flex flex-column overflow-hidden">
            <Header animated={false}/>
            <ImageGrid title="Фотогалерея">{
                previews?.map((value, index, array) =>
                    <GalleryPreview link={value.link} preview={value.preview} key={value.text}>{value.text}</GalleryPreview>
                )
            }
            </ImageGrid>
            <Footer/>
        </div>
    )
}