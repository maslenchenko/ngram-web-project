import React, {useState} from "react";
import '../styles/contact.css'

function ContactInput(text) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleContact= () => {
    console.log('Contacting us');
  };

  return (
      <div className="contact-input">
        <input
          type="text"
          placeholder={text.text}
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
  );
}

export default ContactInput;
