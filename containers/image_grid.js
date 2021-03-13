import React from 'react';
import MainColoredSection from "./main_colored_section";

export default function ImageGrid({title, children}) {
    return (
        <div className="mt-5">
            <MainColoredSection bgClass="bg-white">
                <span className="h3-text text-center">
                    {title}
                </span>
                <div className="container d-flex flex-wrap my-2 justify-content-around">
                    {children}
                </div>
            </MainColoredSection>
        </div>

    )
}
