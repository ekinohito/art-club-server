import React from 'react';
import Modal from "../containers/modal";
// import PropTypes from 'prop-types';

export default function PosterDescription({show, closeModal, poster}) {
    return (
        <Modal show={show} closeModal={closeModal}>
            <div className="row h-100 justify-content-center">
                <div className="col-md-9 col-12 d-flex flex-column justify-content-center">
                    <div className="bg-light-grey p-4 my-4" style={{borderRadius: 10}}>
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-end">
                                <button onClick={closeModal} className="bg-transparent">
                                    <img src="/assets/icons/cross.png" alt="cross" width={20} height={20}/>
                                </button>
                            </div>
                            <div className="d-flex flex-sm-row flex-column " style={{overflowY: "visible"}}>
                                <img
                                    src={`/data/posters/${poster.iconName}`}
                                    alt={poster.id}
                                    height={300}
                                    style={{borderRadius: 10}}
                                    className="align-self-center"
                                />
                                <div className="flex-grow-1 d-flex flex-column text-center ml-sm-4 mt-sm-0 mt-2">
                                    <span className="h5-text mb-2">{poster.name}, {poster.date}</span>
                                    <div className="flex-grow-1 body-text-big" style={{wordBreak: "break-all"}}>
                                        <span className="span-big-text">Описание:</span> {poster.description}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Modal>
    )
}

// PosterDescription.propTypes = {
//     show: PropTypes.bool.required,
//     closeModal: PropTypes.func.isRequired,
//     poster: PropTypes.exact({
//         id: PropTypes.number.isRequired,
//         iconName: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired
//     })
// }
