import React from "react";
import "../styles/analysis.css";
import "../styles/contact.css";

function PredictText(placeholder, value) {
  return (
    <div>
      <textarea
        className="predict-area"
        placeholder={placeholder.text}
        value={value.text}
        readOnly
      />
    </div>
  );
}

export default PredictText;
