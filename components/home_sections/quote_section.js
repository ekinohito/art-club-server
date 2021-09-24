import React, {useEffect, useState} from 'react';

import {useTransition, config, animated} from "react-spring";
import {useGetQuotes} from "../../hooks/requests/useQuotes";
import MainColoredSection from "../../containers/main_colored_section";

export default function QuoteSection({timeout = 5000, ...props}) {
    const {quotes, error} = useGetQuotes(props.quotes);
    const [k, setK] = useState(0);
    const transitions = useTransition(k, {
        from: {opacity: 0, top: 0},
        enter: {opacity: 1, top: 0},
        leave: {position: "absolute", top: 0, opacity: 0},
        config: config.molasses,
    })

    useEffect(() => {
        const id = setTimeout(() => {
            setK(k => (k + 1) % quotes?.length);

        }, timeout);
        return () => clearTimeout(id);
    }, [k, quotes])

    return (
        <MainColoredSection bgClass="bg-concert-photo">
            <div className="d-flex flex-row flex-nowrap">
                {transitions(({opacity, position, top}, item) =>
                    <animated.div
                        key={item}
                        style={{opacity: opacity, position, top}}
                    >
                        <div className="h2-text-lg h3-text text-white py-5 text-center" style={{lineHeight: "125%"}}>
                            "{quotes ? quotes[item]?.text: null}"
                        </div>
                    </animated.div>
                )}
            </div>
        </MainColoredSection>
    )
}
