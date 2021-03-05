import React, {useEffect, useState} from 'react';

import styles from './CompetenceSection.module.scss';


export default function CompetenceSection() {

    const [competence, setCompetence] = useState([]);
    useEffect(() => {
        fetch('/api/competence')
            .then(res => res.json())
            .then(competence => setCompetence(competence));
    }, [fetch]);

    return (
        <div className="d-flex flex-column py-5 bg-gradient text-center">
            <div className="container">
                <span className="h2-text text-white">
                    Чем мы занимаемся?
                </span>
                <div className="d-flex flex-md-row flex-column justify-content-around mt-5">
                    {
                        competence.map(item =>
                            <a className={`d-flex flex-column align-items-center mb-md-0 mb-4 text-decoration-none ${styles.competenceItem}`}>
                                <img
                                    src={`/data/competence/${item.iconName}`}
                                    height={70}
                                    width={70}
                                    alt={item.name}
                                />
                                <span className="h4-text text-white mt-3">{item.name}</span>
                            </a>
                        )
                    }
                </div>
            </div>

        </div>
    );
}
