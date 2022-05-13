import React from "react";
import Item from "./Item";

const Tree = ({ data = [] }) => {
  return (
    <ul>
      {data.map((tree) => (
        <Item node={tree} />
      ))}
    </ul>
  );
};

export default Tree;
