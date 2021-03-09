import React from 'react';

export default function AboutParallaxSection({ image, children }) {
    return (
        <div className="bg-parallax py-5" style={{backgroundImage: `url('${image}')`}}>
            <div className="container">
                <div className="h2-text-lg h3-text text-white py-5 text-center" style={{ lineHeight: "125%" }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
