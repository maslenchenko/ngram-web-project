import React, { useState } from 'react';
import '../styles/contextwords.css';

function ContextWords() {
  const [range, setRange] = useState(1);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 100; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className='context-container'>
        <p className='context-title'>Words to predict</p>
      <select className="context-list" value={range} onChange={handleRangeChange}>
        {renderOptions()}
      </select>
    </div>
  );
}

export default ContextWords;
