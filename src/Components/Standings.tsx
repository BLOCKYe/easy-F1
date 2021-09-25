import React, { useState, useEffect } from 'react';
import { GiFullMotorcycleHelmet } from 'react-icons/gi';
import { IoMdHammer } from 'react-icons/io';
import { Drivers } from './Drivers';
import { Teams } from './Teams';

export const Standings: React.FC = () => {
    const [driversList, setdriversList] = useState<boolean>(true);
    const [teamsList, setteamsList] = useState<boolean>(false);
    const [drivers, setdrivers] = useState([
        { position: '', Driver: { familyName: '' }, points: '' },
    ]);

    const [teams, setteams] = useState([
        { position: '', Constructor: { name: '' }, points: '' },
    ]);

    useEffect(() => {
        fetch('http://ergast.com/api/f1/current/driverStandings.json')
            .then((response) => response.json())
            .then((result) => {
                setdrivers(
                    result.MRData.StandingsTable.StandingsLists[0]
                        .DriverStandings
                );
            })
            .catch((error) => console.log('error', error));

        fetch('http://ergast.com/api/f1/current/constructorStandings.json')
            .then((response) => response.json())
            .then((result) => {
                setteams(
                    result.MRData.StandingsTable.StandingsLists[0]
                        .ConstructorStandings
                );
            })
            .catch((error) => console.log('error', error));
    }, []);

    return (
        <div className="standings">
            <div className="standings__title">Standings</div>
            <div className="standings__menu">
                <div
                    onClick={() => {
                        setteamsList(false);
                        setdriversList(true);
                    }}
                    className={`standings__type ${
                        driversList ? 'standings__type--active' : ''
                    }`}
                >
                    <div className="standings__icon">
                        <GiFullMotorcycleHelmet />
                    </div>
                    Drivers
                </div>

                <div
                    onClick={() => {
                        setdriversList(false);
                        setteamsList(true);
                    }}
                    className={`standings__type ${
                        teamsList ? 'standings__type--active' : ''
                    }`}
                >
                    <div className="standings__icon">
                        <IoMdHammer />
                    </div>
                    Constructors
                </div>
            </div>

            {driversList && (
                <div className="standings__list">
                    <Drivers drivers={drivers} />
                </div>
            )}

            {teamsList && (
                <div className="standings__list">
                    <Teams teams={teams} />
                </div>
            )}
        </div>
    );
};
