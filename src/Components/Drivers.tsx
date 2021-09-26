import React from 'react';
import { Item } from './Item';

type Props = {
    drivers: {
        position: string;
        wins: string;
        Driver: { familyName: string; nationality: string };
        points: string;
        Constructors: { constructorId: string }[];
    }[];
};

export const Drivers: React.FC<Props> = (props) => {
    return (
        <div className="list">
            {[...props.drivers].map((e) => (
                <Item
                    key={e.position}
                    position={e.position}
                    name={e.Driver.familyName}
                    points={e.points}
                    wins={e.wins}
                    nationality={e.Driver.nationality}
                    constructorId={e.Constructors[0].constructorId}
                />
            ))}
        </div>
    );
};
