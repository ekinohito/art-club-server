import React from 'react';
import Portal from "./portal";
import Modal from "../containers/modal";

export default function PosterDescription({show, closeModal, poster}) {

    return (
        <Modal show={show}>
            <div className="container bg-info p-3" style={{borderRadius: "30px"}}>
                <div className="row">
                    <div className="col-12 col-sm-5">
                        <img src={poster.image} alt={poster.title} style={{display: "block", position: "relative", width: "100%", borderRadius: "20px"}}/>
                    </div>
                    <div className="col-12 col-sm-7">
                        <h1 className="h1-text mt-3 mt-sm-0">{poster.title}</h1>
                        <p className="body-text mt-3 pr-3">{poster.description}</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
