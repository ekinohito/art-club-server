import React from 'react';

export default function Poster({poster, height}) {
    return (
        <div className="px-2 h-100 bg-light-grey">
            <img
                src={`/data/posters/${poster.iconName}`}
                width="auto"
                height={height}
                alt={poster.id}
            />
        </div>


    );
}
