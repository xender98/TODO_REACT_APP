import React from "react";

const Button = props => {
  return (
    <button className="action" onClick={props.handleRemove}>
      Remove
    </button>
  );
};


export default Button;