import React from 'react';

export default function Description({image, title, description}) {
    return <div className="container bg-info p-3" style={{borderRadius: "30px"}}>
        <div className="row">
            <div className="col-12 col-sm-5">
                <img src={image} alt={title} style={{display: "block", position: "relative", width: "100%", borderRadius: "20px"}}/>
            </div>
            <div className="col-12 col-sm-7">
                <h1 className="h1-text mt-3 mt-sm-0">{title}</h1>
                <p className="body-text mt-3 pr-3">{description}</p>
            </div>
        </div>
    </div>
}
