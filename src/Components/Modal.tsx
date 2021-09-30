import React, { useEffect } from 'react';
import { ModalItem } from './ModalItem';

interface Props {
    modal: boolean;
    raceName: string;
    date: string;
    setModal: (modal: boolean) => void;
    results: {
        positionText: string;
        points: string;
        Driver: { familyName: string };
        Constructor: { constructorId: string };
        grid: string;
        Time: { time: string };
        FastestLap: { Time: { time: string }; AverageSpeed: { speed: string } };
    }[];
}

export const Modal: React.FC<Props> = (props) => {

    // lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div
            onClick={() => {
                props.setModal(false);
            }}
            className="modal"
        >
            <h3>
                {props.raceName}, {props.date}
            </h3>
            <div className="modal__list">
                {props.results.map((e) => (
                    <ModalItem
                        key={e.grid}
                        position={e.positionText}
                        points={e.points}
                        name={e.Driver.familyName}
                        grid={e.grid}
                        constructorId={e.Constructor.constructorId}
                        time={e.Time === undefined ? '-' : e.Time.time}
                        lapTime={
                            e.FastestLap === undefined
                                ? '-'
                                : e.FastestLap.Time.time
                        }
                        avg={
                            e.FastestLap === undefined
                                ? '-'
                                : e.FastestLap.AverageSpeed.speed
                        }
                    />
                ))}
            </div>
        </div>
    );
};
