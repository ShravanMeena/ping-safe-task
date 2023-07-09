import React from "react";
import { directoryData } from "./data";
import useAppBusinessLogic from "./hooks/useAppBusinessLogic";
import CheckBoxTree from "./components/CheckBoxTree";

import "./App.css";

export default function App() {
  const { selected, setSelected, handleSubmit, submitData } =
    useAppBusinessLogic();

  return (
    <div className="main">
      <CheckBoxTree
        data={directoryData}
        selected={selected}
        setSelected={setSelected}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {submitData.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  );
}
