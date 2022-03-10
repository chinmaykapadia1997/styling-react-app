import React from "react";

const ItemComponent = (props) => {
  return (
    <div>
      <li>{props.children}</li>
    </div>
  );
};

export default ItemComponent;
