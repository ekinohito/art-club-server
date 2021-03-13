import React, {useEffect} from 'react';
import useModal from "../hooks/useModal";
import PosterDescription from "./poster_description";

export default function Poster({poster, height}) {
    const {show, openModal, closeModal} = useModal();

    useEffect(() => console.log(show), [show])

    return (
        <div
            className="p-1 p-md-3 p-xl-4 h-100 bg-light-grey"
            style={{cursor: "pointer"}}
            onClick={openModal}
        >
            <img
                src={`/data/posters/${poster.iconName}`}
                width="auto"
                height={height}
                alt={poster.id}
                style={{borderRadius: '20px'}}
            />
            <PosterDescription show={show} closeModal={closeModal} poster={poster}/>
        </div>


    );
}
