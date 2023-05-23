import React from "react";
import "../styles/contextwords.css";

function ContextWords({range, setRange}) {

    const handleRangeChange = (event) => {
        const newRange = parseInt(event.target.value, 10);
        const maxRange = 100;
        if (newRange > maxRange) {
            setRange(maxRange);
        } else {
            setRange(newRange);
        }
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
