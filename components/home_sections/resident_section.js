import React from 'react';
import useSWR from "swr";
import Slider from "../slider";

export default function ResidentSection() {
    const {data, error} = useSWR("/api/residents");

    return (
        <div className="bg-light-grey py-5">
            <div className="container d-flex flex-column">
                <span className="h2-text-lg h3-text text-center mb-4">
                    Наши резиденты
                </span>
                <Slider>
                    {data?.map(resident =>
                        <a
                            key={resident.id}
                        >
                            <div
                                className="px-3 py-1 bg-light-grey h-100">
                                <img src={`/data/residents/${resident.iconName}`} alt={resident.name} style={{borderRadius: "50%"}}/>
                            </div>
                        </a>
                    )}
                </Slider>
            </div>
        </div>
    );
}
