import React, {useState} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "../styles/dropdown.css";

const DropDown = ({heading, text}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-main">
      <div className="dropdown-title">
        <p className="dropdown-heading" onClick={handleOpen}>{ heading }
            {open ? <IoIosArrowUp className="dropdown-icon" /> : <IoIosArrowDown className="dropdown-icon" /> }
        </p>
      </div>
      {open ? <div className="dropdown-text">{ text }</div> : null}
    </div>
  );
};

export default DropDown;