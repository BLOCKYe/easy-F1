import React, { useState, useEffect } from 'react';

interface Props {
    position: string;
    name: string;
    points: string;
    wins?: string;
    nationality?: string;
    constructorId?: string;
}

export const Item: React.FC<Props> = (props) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(() => {
      if(width > 1100) setShowMore(true)
    }, [])

    return (
        <div
            onClick={() => {width > 1100 ? 
                setShowMore(true) : setShowMore(!showMore)
            }}
            className={`item ${props.constructorId}`}
        >
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
