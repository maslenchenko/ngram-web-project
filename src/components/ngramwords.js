import React, { useState } from "react";
import "../styles/ngramwords.css";

function NgramWords({ range, setRange }) {
  const handleRangeChange = (event) => {
    const newRange = parseInt(event.target.value, 10);
    // setRange(newRange);
    const maxRange = 10;
    if (newRange > maxRange) {
      setRange(maxRange);
    } else {
      setRange(newRange);
    }
  };

  // const renderOptions = () => {
  //   const options = [];
  //   for (let i = 1; i <= 10; i++) {
  //     options.push(
  //       <option key={i} value={i}>
  //         {i}
  //       </option>
  //     );
  //   }
  //   return options;
  // };

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
        // readOnly
      />
    </div>
  );
}

export default NgramWords;
