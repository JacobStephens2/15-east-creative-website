import React from "react";
import { Link } from "gatsby";

// # props
//
// - target: the link destination
// - buttonText: a string with the text the button will display

const Button = (props) => {
  return (
    <Link to={props.target}>
      <button class="button-external" name={props.buttonText}>
        {props.buttonText}
        <div id="triangle-right"></div>
      </button>
    </Link>
  );
};

export default Button;
