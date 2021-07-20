import React from 'react';
import { Link } from "gatsby"

const Button = props => {
  return (
    <div className="call-box-bottom">
      <Link to={props.target} className="button">{props.name}</Link>
    </div>
  );
};

export default Button;
