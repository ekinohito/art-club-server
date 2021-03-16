import React from 'react';
import Head from 'next/head';
import TopSection from "../components/home_sections/top_section";
import PosterSection from "../components/home_sections/poster_section";
import CompetenceSection from "../components/home_sections/competence_section";
import QuoteSection from "../components/home_sections/quote_section";
import Footer from "../components/footer";
import PartnersSection from "../components/home_sections/partners_section";
import ResidentSection from "../components/home_sections/resident_section";
import Header from "../components/header";
import GallerySection from "../components/home_sections/gallery_section";
import fetcher from "../fetcher";

export default function Home(props) {
    return (

        <div className="d-flex flex-column overflow-hidden">
            <Head>
                <title>Art Club</title>
            </Head>
            <Header/>
            <TopSection>
                <video
                    src="/assets/webm/animated-bg.webm"
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
        </div>
    )
}
