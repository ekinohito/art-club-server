import React, {useEffect} from 'react';
import PosterDescription from "./poster_description";
import {usePosterDescription} from "../context/poster_description";

export default function Poster({poster}) {
    const {openPD, setPoster} = usePosterDescription();

    return (
        <div
            style={{cursor: "pointer"}}
            onClick={() => {
                setPoster(poster);
                openPD();
            }}
        >
            <img
                src={`${poster.iconName}`}
                width="auto"
                alt={poster.id}
                className="img-fluid"
                style={{borderRadius: '20px'}}
            />
        </div>


    );
}
