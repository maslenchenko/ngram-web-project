import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "../styles/dropdown.css";

const DropDown = ({ heading, text }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-main">
      <div className="dropdown-title" onClick={handleOpen}>
        <p className="dropdown-heading">{heading}</p>
        {open ? (
          <div className="icon-container">
            <IoIosArrowUp className="dropdown-icon" />
          </div>
        ) : (
          <div className="icon-container">
            <IoIosArrowDown className="dropdown-icon" />
          </div>
        )}
      </div>
      {open ? <div className="dropdown-text">{text}</div> : null}
    </div>
  );
};

export default DropDown;
