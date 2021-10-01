import React, { useState, useEffect } from 'react';

interface Props {
    position: string;
    name: string;
    points: string;
    wins: string;
    nationality: string;
    constructorId: string;
    dateOfBirth?: string;
    teamName?: string;
    forDrivers?: boolean;
}

export const Item: React.FC<Props> = (props) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    const [width] = useState(window.innerWidth);

    useEffect(() => {
        if (width > 1100) setShowMore(true);
    }, []);

    const setAge = (ageString: any) => {
        var today = new Date();
        var birthDate = new Date(ageString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    return (
        <div
            onClick={() => {
                setAge(props.dateOfBirth);
                width > 1100 ? setShowMore(true) : setShowMore(!showMore);
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

                    {props.forDrivers && (
                        <div className="item__wins">
                            Age: <strong>{setAge(props.dateOfBirth)}</strong>
                        </div>
                    )}

                    {props.forDrivers && (
                        <div className="item__nationality">
                            Team: <strong>{props.teamName}</strong>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
