import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import TopSection from "../components/home_sections/top_section";
import PosterSection from "../components/home_sections/poster_section";

export default function Home() {
    return (

        <div className="d-flex flex-column overflow-hidden">
            <Head>
                <title>Art Club</title>
            </Head>
            <TopSection/>
            <PosterSection/>
        </div>
    )
}
