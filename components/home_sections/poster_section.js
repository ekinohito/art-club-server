import React, {useEffect, useState} from 'react';
import Poster from "../poster";


export default function PosterSection() {
    const [posters, setPosters] = useState([]);

    useEffect(() => {
        fetch('/api/posters')
            .then(res => res.json())
            .then(posters => setPosters(posters));
    }, [fetch]);
    return (
        <div className="d-flex flex-column bg-light-grey py-4" style={{zIndex: 999}}>
            <div className="container">
                <div className="d-flex justify-content-between pb-4">
                    <span className="h3-text">
                        Афиша
                    </span>
                    <button className="btn btn-outline-info">
                        Посмотреть все
                    </button>
                </div>
                <div>
                    {
                        posters.map(poster => <Poster poster={poster} height={300} key={poster.id}/>)
                    }
                </div>

            </div>

        </div>
    )
}
