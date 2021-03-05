import React from 'react';
import Image from "next";

export default function Poster({poster, height}) {
    console.log(poster)
    return (
        <div className="px-2 h-100 bg-light-grey">
            <img
                src={`/data/posters/${poster.iconName}`}
                width="auto"
                height={height}
                alt={poster.id}
            />
        </div>


    );
}
