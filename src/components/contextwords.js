import React, { useState } from "react";
import "../styles/contextwords.css";

function ContextWords() {
  const [range, setRange] = useState(1);

  const handleRangeChange = (event) => {
    setRange(Number(event.target.value));
  };

  return (
    <div className="context-container">
      <p className="context-title">Words to predict</p>
      <input
        type="number"
        className="context-input"
        value={range}
        onChange={handleRangeChange}
        min={1}
        max={100000}
      />
    </div>
  );
}

export default ContextWords;
