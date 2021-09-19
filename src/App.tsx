import React from "react";
import { Drivers } from "./Components/Drivers";
import Header from "./Components/Header";
import Next from "./Components/Next";
import { Teams } from "./Components/Teams";
import "./styles/style.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Next />
      <Drivers />
      <Teams />
    </div>
  );
};

export default App;
