import React from "react";
import Button from "./Button";
import "../styles/App.css";

const ListItem = props => {
  return (
    <li>
       <input
        type="text"
        value={props.item}
      />
      <Button
        handleRemove={props.handleRemove}
      />
    </li>
  );
};

export default ListItem;