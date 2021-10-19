import React from 'react';
import TopSection from "../components/home_sections/top_section";
import PosterSection from "../components/home_sections/poster_section";
import CompetenceSection from "../components/home_sections/competence_section";
import QuoteSection from "../components/home_sections/quote_section";
import Footer from "../components/footer";
import PartnersSection from "../components/home_sections/partners_section";
import ResidentSection from "../components/home_sections/resident_section";
import Header from "../components/header";
import GallerySection from "../components/home_sections/gallery_section";
import Page from "../containers/page";

export default function Home(props) {
    return (
        <Page>
            <Header/>
            <TopSection>
                <video
                    src="/assets/webm/animated-bg.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                </TopSection>
            <PosterSection posters={props.posters}/>
            <CompetenceSection competence={props.competence}/>
            <ResidentSection residents={props.residents}/>
            <QuoteSection quote={props.quotes}/>
            <GallerySection previews={props.previews}/>
            <PartnersSection partners={props.partners}/>
            <Footer/>
        </Page>
    )
}
