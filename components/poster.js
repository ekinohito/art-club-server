import React, {useEffect} from 'react';
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
            <div style={{backgroundImage: `url(${poster.iconName})`, backgroundSize: "cover", backgroundPosition: "center",borderRadius: '20px', paddingBottom: '150%'}}/>
        </div>


    );
}
