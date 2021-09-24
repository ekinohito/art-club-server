import React from 'react';

export default function MainColoredSection({bgClass, children, style}) {
    return (
        <div className={`py-5 ${bgClass}`} style={style}>
            <div className="d-flex flex-column container">
                {children}
            </div>
        </div>
    )
}
