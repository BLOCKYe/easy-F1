import React, { useState, useEffect, useRef } from 'react';
import { Modal } from './Modal';

interface Props {
    round: string;
    name: string;
    date: string;
}

interface Results {
    positionText: string;
    points: string;
    Driver: { familyName: string };
    Constructor: { constructorId: string };
    grid: string;
    Time: { time: string };
    FastestLap: { Time: { time: string }; AverageSpeed: { speed: string } };
}

export const Race: React.FC<Props> = (props) => {
    const ref: React.RefObject<HTMLInputElement> = React.createRef();
    const [results, setresults] = useState<Results[]>([]);
    const [modal, setModal] = useState(false);

    const passChecker = () => {
        let now = new Date().toISOString().slice(0, 10);
        if (props.date < now) return true;
        else return false;
    };

    const showMore = () => {
        fetch(`https://ergast.com/api/f1/2021/${props.round}/results.json`)
            .then((response) => response.json())
            .then((result) => {
                setresults(result.MRData.RaceTable.Races[0].Results);
                setModal(true);
            })
            .catch((error) => console.log('error', error));
    };

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (modal && ref.current && !ref.current.contains(e.target)) {
                setModal(false);
            }
        };

        document.addEventListener('mousedown', checkIfClickedOutside);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [modal]);

    return (
        <div className="race__container" ref={ref}>
            <div
                onClick={showMore}
                className={`race ${passChecker() ? 'pass' : ''}`}
            >
                <div className="race__round">{props.round}</div>
                <div className="race__name">{props.name}</div>
                <div className="race__date">{props.date}</div>
            </div>
            {modal && (
                <Modal
                    modal={modal}
                    date={props.date}
                    raceName={props.name}
                    setModal={setModal}
                    results={results}
                />
            )}
        </div>
    );
};
