import React from 'react';
import { Item } from './Item';

type Props = {
    drivers: {
        position: string;
        Driver: { familyName: string };
        points: string;
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
                />
            ))}
        </div>
    );
};
