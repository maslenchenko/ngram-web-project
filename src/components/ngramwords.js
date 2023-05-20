import React, { useState } from 'react';
import '../styles/ngramwords.css';

function NgramWords() {
  const [range, setRange] = useState(1);

  const handleRangeChange = (event) => {
    setRange(event.target.value);
  };

  const renderOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div className='ngram-container'>
        <p className='ngram-title'>Choose n-gram size</p>
      <select className="ngram-list" value={range} onChange={handleRangeChange}>
        {renderOptions()}
      </select>
    </div>
  );
}

export default NgramWords;
