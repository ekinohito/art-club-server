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
            <TopSection/>
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

export async function getStaticProps(context) {
    const url = 'http://localhost:3000';
    const posters = await fetcher(url + '/api/data/posters');
    const competence = await fetcher(url + '/api/data/competence');
    const partners = await fetcher(url + '/api/data/partners');
    const previews = await fetcher(url + '/api/data/previews');
    const residents = await fetcher(url + '/api/data/residents');
    const quotes = await fetcher(url + '/api/data/quotes');

    return {
        props: {
            posters, competence, partners, previews, residents, quotes
        },
    }
}
