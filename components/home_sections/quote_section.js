import React, {useEffect, useState} from 'react';

import {useTransition, config, animated} from "react-spring";
import {useGetQuotes} from "../../hooks/requests/useQuotes";
import MainColoredSection from "../../containers/main_colored_section";

export default function QuoteSection({timeout = 5000, ...props}) {
    const {quotes, error} = useGetQuotes(props.quotes);
    const [k, setK] = useState(0);
    const transitions = useTransition(k, k => k, {
        from: {opacity: 0},
        enter: {opacity: 1},
        leave: {position: "absolute", opacity: 0},
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
            <div className="position-relative">
                {transitions.map(({item, props, key}) =>
                    <animated.div
                        key={key}
                        style={props}
                    >
                        <div className="h2-text-lg h3-text text-white py-5 text-center" style={{lineHeight: "125%"}}>
                            "{quotes ? quotes[item]: null}"
                        </div>
                    </animated.div>
                )}
            </div>
        </MainColoredSection>
    )
}
