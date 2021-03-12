import React from 'react';
import MainColoredSection from "./main_colored_section";

export default function ImageGrid({title, children}) {
    return (
        <MainColoredSection bgClass="bg-white"><span className="h3-text">
                {title}
            </span>
            <div className="container d-flex flex-wrap my-4 justify-content-around">
                {children}
            </div>
        </MainColoredSection>
    )
}
