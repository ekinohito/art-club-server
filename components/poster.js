import React from 'react';

export default function Poster({poster, height}) {
    return (
        <div className="p-1 p-md-3 p-xl-4 h-100 bg-light-grey">
            <img
                src={`/data/posters/${poster.iconName}`}
                width="auto"
                height={height}
                alt={poster.id}
                style={{borderRadius: '20px'}}
            />
        </div>


    );
}
