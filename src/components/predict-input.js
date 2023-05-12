import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../styles/predictinput.css'

function PredictInput() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePredict = () => {
    console.log(`Predicting input value: ${inputValue}`);
  };

  return (
    <div className="predict-main">
      <div className="predict-title">
        <p> Predict next words </p>
      </div>
      <div className="predict-input">
        <input
          type="text"
          placeholder="Input text here..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <Link to="/analysis"> Predict </Link>
      </div>
    </div>
  );
}

export default PredictInput;
