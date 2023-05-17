import React, {useState} from "react";
import {Link} from "react-router-dom";
import '../styles/analysis.css'
import '../styles/contact.css'


function PredictText(placeholder) {
    return (
        <div>
            <textarea className="predict-area" placeholder={placeholder.text}/>
        </div>
    );
}

export default PredictText;