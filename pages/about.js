import React from 'react';
import TopSection from "../components/home_sections/top_section";
import Parallax from "../components/parallax";
import Footer from "../components/footer";
import Header from "../components/header";
import Screen from "../components/screen";

export default function About() {
    return (

        <div className="d-flex flex-column overflow-hidden">
            <Header/>
            <Screen image="/assets/images/cascade/vocal.jpg"/>
            <Parallax image="/assets/images/cascade/vocal.jpg">Вокал</Parallax>
            <Parallax image="/assets/images/cascade/dance.jpg">Танцы</Parallax>
            <Parallax image="/assets/images/cascade/instruments1.jpg">Музыкальные инструменты</Parallax>
            <Parallax image="/assets/images/cascade/decl.jpg">Декламация</Parallax>
            <Parallax image="/assets/images/cascade/dance2.jpg">Изобразительное искусство</Parallax>
            <Footer/>
            
        </div>
    )
}