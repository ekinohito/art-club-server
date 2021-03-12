import React from 'react';
import Portal from "./portal";
import Modal from "../containers/modal";

export default function PosterDescription({show, closeModal, poster}) {

    return (
        <Modal show={show} closeModal={closeModal}>
            <div className="row h-100 justify-content-center">
                <div className="col-md-9 col-12 d-flex flex-column justify-content-center">
                    <div className="bg-light-grey p-4 my-4" style={{borderRadius: 10}}>
                        <div className="d-flex">
                            <img
                                src={`/data/posters/${poster.iconName}`}
                                alt={poster.id}
                                height={300}
                                style={{borderRadius: 10}}
                            />
                            <div className="flex-grow-1 d-flex flex-column text-center ml-4">
                                <span className="h5-text mb-2">{poster.name}, {poster.date}</span>
                                <div className="flex-grow-1 body-text-big" style={{wordBreak: "break-all"}}>
                                    <span className="span-big-text">Описание:</span> {poster.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
