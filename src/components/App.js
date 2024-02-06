import { useState } from "react";
import React from "react";

import "../styles/App.css";
const App = () => {
  const [selectedShape, setSelectedShape] = useState("square");
  const [shapesList, setShapesList] = useState([]);

  const handleShapeChange = (event) => {
    setSelectedShape(event.target.value);
  };

  const handleAddShape = () => {
    const newShape = {
      id: shapesList.length + 1, // Unique identifier for each shape
      type: selectedShape,
    };

    setShapesList([...shapesList, newShape]);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleShapeChange}>
          <option value="square">Square</option>
          <option value="circle">Circle</option>
        </select>
        <button onClick={handleAddShape}>Add Shape</button>
      </div>
      <div id="shapes-holder">
        {shapesList.map((shape) => (
          <div key={shape.id} className={shape.type}></div>
        ))}
      </div>
    </div>
  );
};

export default App;
