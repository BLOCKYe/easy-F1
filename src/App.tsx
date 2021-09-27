import React from 'react';
import Header from './Components/Header';
import Next from './Components/Next';
import { Schedule } from './Components/Schedule';
import { Standings } from './Components/Standings';
import './styles/style.css';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Next />
            <Standings />
            <Schedule />
        </div>
    );
};

export default App;
