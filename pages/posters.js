import React from 'react';
import {useGetPosters} from "../hooks/requests/usePosters";
import Header from "../components/header";
import ImageGrid from "../containers/image_grid";
import Poster from "../components/poster";
import Footer from "../components/footer";
import { PosterDescriptionProvider } from '../context/poster_description';
import Page from "../containers/page";

export default function Posters() {
    const {posters, error} = useGetPosters();

    return (
        <Page>
            <Header animated={false}/>
            <ImageGrid title={"Архив событий"}>
                <PosterDescriptionProvider>
                    {posters?.map(poster => (
                    <div key={poster.id} className="col-sm-6 col-md-4 col-lg-3 col-12 mt-4">
                        <Poster poster={poster}/>
                    </div>
                    )
                )}
                </PosterDescriptionProvider>
            </ImageGrid>
            <Footer/>
        </Page>
    )
}
