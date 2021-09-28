import React, { useState, useEffect } from 'react';
import { FaFlagCheckered } from 'react-icons/fa';

const Next: React.FC = () => {
    const [date, setdate] = useState('');
    const [name, setname] = useState('');

    useEffect(() => {
        fetch('https://ergast.com/api/f1/current.json')
            .then((response) => response.json())
            .then((result) => {
                setname(
                    result.MRData.RaceTable.Races[
                        findNext(result.MRData.RaceTable.Races)
                    ].raceName
                );
                setdate(
                    result.MRData.RaceTable.Races[
                        findNext(result.MRData.RaceTable.Races)
                    ].date
                );
            })
            .catch((error) => console.log('error', error));
    }, []);

    const findNext = (data: { date: string }[]) => {
        let now = new Date().toISOString().slice(0, 10);
        let index = data.findIndex((e) => e.date > now);

        return index;
    };

    return (
        <div className="next">
            <div className="next__title">
                <div className="next__icon">
                    <FaFlagCheckered />
                </div>
                Next race
            </div>
            <div className="next__card">
                <div className="next__date">{date}</div>
                <div className="next__name">{name}</div>
            </div>
        </div>
    );
};

export default Next;
