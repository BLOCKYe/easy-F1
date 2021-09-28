import React from 'react';

interface Props {
    round: string;
    name: string;
    date: string;
}

export const Race: React.FC<Props> = (props) => {
    const passChecker = () => {
        let now = new Date().toISOString().slice(0, 10);
        if (props.date < now) return true;
        else return false;
    };

    return (
        <div className={`race ${passChecker() ? 'pass' : ''}`}>
            <div className="race__round">{props.round}</div>
            <div className="race__name">{props.name}</div>
            <div className="race__date">{props.date}</div>
        </div>
    );
};
