import React from "react";
import "./Button.css";

const Button = ({ text, isDisabled, handleClick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => handleClick(text.toLowerCase())}
        disabled={isDisabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
