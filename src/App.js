import React from "react";
import "./styles.css";
import data from "./data";
import Tree from "./components/Tree";

export default function App() {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
}
