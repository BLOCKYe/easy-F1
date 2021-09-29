import React, { useState, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Race } from './Race';

interface Race {
    raceName: string;
    round: string;
    date: string;
}

export const Schedule: React.FC = () => {
    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        fetch('https://ergast.com/api/f1/current.json')
            .then((response) => response.json())
            .then((result) => {
                setRaces(result.MRData.RaceTable.Races);
            })
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <div className="schedule">
            <div className="schedule__title">
                <div className="schedule__icon">
                    <FaRegCalendarAlt />
                </div>
                Schedule
            </div>

            <div className="shedule__list">
                {[...races].map((e) => (
                    <Race
                        key={e.round}
                        round={e.round}
                        name={e.raceName}
                        date={e.date}
                    />
                ))}
            </div>
        </div>
    );
};
