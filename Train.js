import React from "react";

const Train = ({ train }) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h5 className="card-title">{train.name}</h5>
        <p className="card-text">Sleeper Price: {train.sleeperPrice}</p>
        <p className="card-text">AC Price: {train.acPrice}</p>
        <p className="card-text">Available Sleeper Seats: {train.availableSeats.sleeper}</p>
        <p className="card-text">Available AC Seats: {train.availableSeats.ac}</p>
      </div>
    </div>
  );
};

export default Train;
