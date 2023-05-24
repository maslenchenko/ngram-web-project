import React from "react";
import "../styles/ngramwords.css";

function NgramWords({ range, setRange }) {
  const handleRangeChange = (event) => {
    const newRange = parseInt(event.target.value, 10);
    const maxRange = 10;
    if (newRange > maxRange) {
      setRange(maxRange);
    } else {
      setRange(newRange);
    }
  };

  return (
    <div className="ngram-container">
      <p className="ngram-title">Choose n-gram size</p>
      <input
        type="number"
        className="ngram-input"
        value={range}
        onChange={handleRangeChange}
        min={1}
        max={10}
      />
    </div>
  );
}

export default NgramWords;
