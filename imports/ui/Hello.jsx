import React, { useState } from 'react';

export const Hello = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body text-center p-4">
        <h3 className="card-title mb-4">Interactive Counter</h3>
        <button className="btn btn-primary btn-lg mb-3" onClick={increment}>
          Click Me
        </button>
        <p className="lead mb-0">You've pressed the button <span className="badge bg-success fs-5">{counter}</span> times.</p>
      </div>
    </div>
  );
};
