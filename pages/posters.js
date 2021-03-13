import React from 'react';
import {useGetPosters} from "../hooks/requests/usePosters";
import Header from "../components/header";
import ImageGrid from "../containers/image_grid";
import Poster from "../components/poster";
import Footer from "../components/footer";

export default function Posters() {
    const {posters, error} = useGetPosters();

    return (
        <div className="d-flex flex-column overflow-hidden">
            <Header animated={false}/>
            <ImageGrid title={"Архив событий"}>
                {posters?.map(poster => (
                    <div className="col-sm-6 col-md-4 col-lg-3 col-12 mt-4">
                        <Poster poster={poster} key={poster.id}/>
                    </div>
                    )
                )}
            </ImageGrid>
            <Footer/>
        </div>
    )
}
