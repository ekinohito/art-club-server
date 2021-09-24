import React from 'react';

export default function MainColoredSection({bgClass, children}) {
    return (
        <div className={`py-5 ${bgClass}`} style={{"--bs-gradient": 'url("assets/images/gradient.jpg")'}}>
            <div className="d-flex flex-column container">
                {children}
            </div>
        </div>
    )
}
