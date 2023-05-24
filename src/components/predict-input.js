import { Link } from "react-router-dom";
import "../styles/predictinput.css";

function PredictInput({
  inputValue,
  setInputValue,
  ngramSize,
  wordsToPredict,
  statistics,
}) {
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
        <Link
          to={`/analysis?input=${inputValue}&n=${ngramSize}&num_to_predict=${wordsToPredict}&statistics=${statistics}`}
        >
          Predict{" "}
        </Link>
      </div>
    </div>
  );
}

export default PredictInput;
