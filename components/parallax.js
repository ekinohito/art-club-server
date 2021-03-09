import React, { useEffect, useState } from 'react';

export default function Parallax({ image, children }) {
    return (
        <div className="bg-concert-photo py-5" style={{backgroundImage: `url('${image}')`}}>
            <div className="container position-relative">
                <div className="h2-text-lg h3-text text-white py-5 text-center" style={{ lineHeight: "125%" }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
