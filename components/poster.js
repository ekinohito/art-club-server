import React from 'react';
import Image from "next";

export default function Poster({poster, height}) {
    console.log(poster)
    return (
        <img
            src={`/data/posters/${poster.filename}`}
            width="auto"
            height={height}
            alt={poster.id}
        />


    );
}
