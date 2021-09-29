import React from 'react';

interface Props {
    position: string;
    name: string;
    time: string;
    points: string;
    lapTime: string;
    avg: string;
    grid: string;
    constructorId: string;
}

export const ModalItem: React.FC<Props> = (props) => {
    return (
        <div className={`modalItem ${props.constructorId}`}>
            <div className="modalItem__position">{props.position}</div>
            <div className="modalItem__name">{props.name}</div>
            <div className="modalItem__time">{props.time}</div>
            <div className="modalItem__points">
                Points: <strong>{props.points}</strong>
            </div>
            <div className="modalItem__lapTime">
                Fastest Lap: <strong>{props.lapTime}</strong>
            </div>
            <div className="modalItem__avg">
                Avg speed: <strong>{props.avg}</strong> kmh
            </div>
            <div className="modalItem__grid">
                Grid: <strong>{props.grid}</strong>
            </div>
        </div>
    );
};
