import React, {useState} from "react";
import '../styles/contact.css'

function QuestionInput(text) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleContact= () => {
    console.log('Contacting us');
  };

  return (
      <div className="contact-input question-input">
        <textarea className="question-area" placeholder="Your question..."></textarea>
        <button onClick={handleContact} className="send-button">Send</button>
      </div>
  );
}

export default QuestionInput;
