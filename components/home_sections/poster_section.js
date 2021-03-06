import React from 'react';
import Poster from "../poster";
import Slider from "../slider";
import useSWR from "swr";


export default function PosterSection() {
    const {data, error} = useSWR('/api/posters');
    return (
        <div className="d-flex flex-column bg-light-grey py-4" style={{zIndex: 999}}>
            <div className="container">
                <div className="d-flex justify-content-between pb-4">
                    <span className="h3-text">
                        Афиша
                    </span>
                    <button className="gradient-button">
                        Посмотреть все
                    </button>
                </div>
                <div>
                    <Slider>
                        {data?.map(poster => <Poster poster={poster} height={'auto'} key={poster.id}/>)}
                    </Slider>
                </div>

            </div>

        </div>
    )
}
