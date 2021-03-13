import React, {useEffect} from 'react';
import useModal from "../hooks/useModal";
import PosterDescription from "./poster_description";

export default function Poster({poster}) {
    const {show, openModal, closeModal} = useModal();

    useEffect(() => console.log(show), [show])

    return (
        <div
            style={{cursor: "pointer"}}
            onClick={openModal}
        >
            <img
                src={`/data/posters/${poster.iconName}`}
                width="auto"
                alt={poster.id}
                className="img-fluid"
                style={{borderRadius: '20px'}}
            />
            <PosterDescription show={show} closeModal={closeModal} poster={poster}/>
        </div>


    );
}
