import React from "react";
import Train from "./components/Train";
import trainsData from "./data/trains";
import RegisterForm from "./components/RegestrationForm";


function App() {
  const sortedTrains = [...trainsData].sort((a, b) => a.sleeperPrice - b.sleeperPrice);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Train Schedule</h1>
      <div className="row">
        {sortedTrains.map((train) => (
          <div key={train.id} className="col-md-6">
            <Train train={train} />
          </div>
        ))}
        
    
      </div>
      
    </div>


  );
}

export default App;
