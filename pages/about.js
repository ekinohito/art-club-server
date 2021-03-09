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

export default function Home() {
    return (

        <div className="d-flex flex-column overflow-hidden">
            <Header/>
            <TopSection/>
            <Footer/>
        </div>
    )
}
