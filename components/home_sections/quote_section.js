import React, {useEffect, useState} from 'react';

import {useTransition, config, animated} from "react-spring";
import {useGetQuotes} from "../../hooks/request/useQuotes";

export default function QuoteSection({timeout = 5000}) {
    const {quotes, error} = useGetQuotes();
    const [k, setK] = useState(0);
    const transitions = useTransition(k, k => k, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {position: "absolute", opacity: 0},
        config: config.molasses,
    })

    useEffect(() => {
        console.log(quotes)
        const id = setTimeout(() => {
            setK(k => (k + 1) % quotes?.length);

        }, timeout);
        return () => clearTimeout(id);
    }, [k, quotes])

    return (
        <div className="bg-concert-photo py-5">
            <div className="container position-relative">

                    {transitions.map(({item, props, key}) =>
                        <animated.div
                            key={key}
                            style={props}
                        >
                            <div className="h2-text-lg h3-text text-white py-5 text-center" style={{lineHeight: "125%"}}>
                                "{quotes ? quotes[item] : null}"
                            </div>
                        </animated.div>
                    )}

            </div>
        </div>
    )
}
