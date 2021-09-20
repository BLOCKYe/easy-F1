import React from "react";
import Header from "./Components/Header";
import Next from "./Components/Next";
import { Standings } from "./Components/Standings";
import "./styles/style.css";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Next />
      <Standings />
    </div>
  );
};

export default App;
