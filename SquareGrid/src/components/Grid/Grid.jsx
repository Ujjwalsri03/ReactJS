import React from 'react';
import './Grid.modular.css'; 

const Grid = () => {
  return (
    <div className="grid-container">
      {/* Column 1 */}
      <div className="column">
        <div className="small-square"></div>
        <div className="small-square"></div>
        <div className="small-square"></div>
      </div>

      {/* Column 2 */}
      <div className="column">
        <div className="small-square"></div>
        <div className="small-square"></div>
      </div>

      {/* Column 3 */}
      <div className="column">
        <div className="small-square"></div>
        <div className="small-square"></div>
        <div className="small-square"></div>
      </div>
    </div>
  );
};

export default Grid;
