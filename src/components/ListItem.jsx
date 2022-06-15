import React from "react";

function ListItem(props) {
  return (
    <div
      onClick={(id) => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ListItem;
