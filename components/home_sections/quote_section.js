import React, {useEffect, useState} from 'react';
import useSWR from "swr";
import {useTransition, config, animated} from "react-spring";

export default function QuoteSection({timeout = 5000}) {
    const {data, error} = useSWR("/api/quotes");
    const [k, setK] = useState(0);
    const transitions = useTransition(k, k => k, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {position: "absolute", opacity: 0},
        config: config.molasses,
    })

    useEffect(() => {
        const id = setTimeout(() => {
            setK(k => (k + 1) % data.length);

        }, timeout);
        return () => clearTimeout(id);
    }, [k, data])

    return (
        <div className="bg-concert-photo py-5">
            <div className="container">
                <div className="h1-text-lg text-white py-5 text-center" style={{lineHeight: "125%"}}>
                    {transitions.map(({item, props, key}) =>
                        <animated.div
                            key={key}
                            style={props}
                        >
                            "{data ? data[item] : null}"
                        </animated.div>
                    )}
                </div>
            </div>
        </div>
    )
}
