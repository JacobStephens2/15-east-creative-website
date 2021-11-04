import React from "react";

// # props
//
// - target: the link destination
// - buttonText: a string with the text the button will display

const Button = (props) => {
  return (
    <a href={props.target}>
      <button name={props.buttonText}>
        {props.buttonText}
        <div id="triangle-right"></div>
      </button>
    </a>
  );
};

export default Button;
