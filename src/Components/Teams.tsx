import React from 'react';
import { Item } from './Item';

type Props = {
    teams: {
        position: string;
        wins: string;
        Constructor: { name: string; nationality: string };
        points: string;
    }[];
};

export const Teams: React.FC<Props> = (props) => {
    return (
        <div className="list">
            {[...props.teams].map((e) => (
                <Item
                    key={e.position}
                    position={e.position}
                    name={e.Constructor.name}
                    points={e.points}
                    wins={e.wins}
                    nationality={e.Constructor.nationality}
                />
            ))}
        </div>
    );
};
