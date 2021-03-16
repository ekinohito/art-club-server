import React from 'react';
import Head from 'next/head';
import Footer from "../components/footer";
import Header from "../components/header";
import Screen from "../components/screen";
import TopSection from "../components/home_sections/top_section";
import AboutParallaxSection from "../containers/about_parallax_section";
import MainColoredSection from "../containers/main_colored_section";

export default function About() {
    return (
        <div className="d-flex flex-column overflow-hidden">
            <Head>
                <title>Art Club</title>
            </Head>
            <Header/>
            <Screen image="/assets/images/FOTO.jpg"/>
            <MainColoredSection bgClass="bg-white"><span className="h3-text">
                Cамая творческая организация МГТУ им. Н.Э. Баумана
            </span></MainColoredSection>
            <AboutParallaxSection image="/assets/images/cascade/zazhig.jpg">
                Мы зажигаем сердца зрителей на огромном количестве мероприятий
                как внутри нашего университета, так и за его пределами.
            </AboutParallaxSection>
            <MainColoredSection bgClass="bg-white"><span className="h3-text">
                Резиденты Арт Клуба - невероятно талантливые люди, которые,
                благодаря Клубу, совершенствуют свои навыки в различных направлениях
            </span></MainColoredSection>
            <AboutParallaxSection image="/assets/images/cascade/vocal.jpg">Вокал</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/dance.jpg">Танцы</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/instruments1.jpg">
                Музыкальные инструменты
            </AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/decl.jpg">Декламация</AboutParallaxSection>
            <AboutParallaxSection image="/assets/images/cascade/dance2.jpg">
                Изобразительное искусство
            </AboutParallaxSection>
            <MainColoredSection bgClass="bg-white"><span className="h3-text">
                Наша миссия - создавать условия для творческой самореализации студентов,
                делать их жизнь ярче, воспитывать в них чувство бауманского братства и единства!
            </span></MainColoredSection>
            <Footer/>
        </div>
    )
}