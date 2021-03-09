import React from 'react';
import TopSection from "../components/home_sections/top_section";
import Footer from "../components/footer";
import Header from "../components/header";
import Screen from "../components/screen";
import AboutParallaxSection from "../containers/about_parallax_section";

export default function About() {
    return (

        <div className="d-flex flex-column overflow-hidden">
            <Header/>
            <Screen image="/assets/images/cascade/vocal.jpg"/>
            <AboutParallaxSection image="/assets/images/cascade/vocal.jpg">Вокал</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/dance.jpg">Танцы</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/instruments1.jpg">Музыкальные инструменты</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/decl.jpg">Декламация</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/dance2.jpg">Изобразительное искусство</AboutParallaxSection>
            <Footer/>
            
        </div>
    )
}