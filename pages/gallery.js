import React from 'react';
import Footer from "../components/footer";
import Header from "../components/header";
import {useGetPreviews} from "../hooks/requests/usePreviews";
import GalleryPreview from "../components/gallery_preview";
import ImageGrid from "../containers/image_grid";
import Page from "../containers/page";

export default function Gallery() {
    const {previews, error} = useGetPreviews()
    return (
        <Page>
            <Header animated={false}/>
            <ImageGrid title="Фотогалерея">{
                previews?.map((value, index, array) =>
                    <GalleryPreview link={value.link} preview={value.preview} key={value.text}>{value.text}</GalleryPreview>
                )
            }
            </ImageGrid>
            <Footer/>
        </Page>
    )
}