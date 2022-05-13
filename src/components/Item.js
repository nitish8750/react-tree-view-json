import { useState } from "react";
import Tree from "./Tree";

const Item = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);
  const hasChild = node.children ? true : false;

  return (
    <li style={{ listStyleType: "none" }} key={node.id}>
      <div onClick={() => setChildVisiblity((v) => !v)}>
        <div>
          {hasChild ? (childVisible ? "▼ " : "▶ ") : "• "}
          {node.name}
        </div>
      </div>

      {hasChild && childVisible && (
        <ul>
          <Tree data={node.children} />
        </ul>
      )}
    </li>
  );
};

export default Item;
