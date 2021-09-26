import React, { useState } from 'react';

interface Props {
    position: string;
    name: string;
    points: string;
    wins: string;
    nationality: string;
}

export const Item: React.FC<Props> = (props) => {
    const [showMore, setShowMore] = useState<boolean>(false);

    return (
        <div onClick={() => setShowMore(!showMore)} className="item">
            <div className="item__position">{props.position}</div>
            <div className="item__name">{props.name}</div>
            <div className="item__points">{props.points}</div>

            {showMore && (
                <div className="item__extended">
                    <div className="item__wins">
                        Wins: <strong>{props.wins}</strong>
                    </div>
                    <div className="item__nationality">
                        Nationality: <strong>{props.nationality}</strong>
                    </div>
                </div>
            )}
        </div>
    );
};
