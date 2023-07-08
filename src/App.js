import React, { useState, useEffect } from "react";
import { directoryData } from "./data";

const CheckBoxTree = ({ data, selected, setSelected, depth = 0 }) => {
  const isIndeterminate = (node) => {
    if (!node.children) {
      return false;
    }
    const childState = node.children.map((child) => selected[child.id]);
    return childState.includes(true) && childState.includes(false);
  };

  const isChecked = (node) => {
    if (!node.children) {
      return !!selected[node.id];
    }
    return node.children.every(isChecked);
  };

  const toggleNode = (node, status) => {
    setSelected((prevSelected) => {
      const updated = { ...prevSelected, [node.id]: status };
      if (node.children) {
        node.children.forEach((n) => {
          updated[n.id] = status;
          if (n.children) {
            toggleNode(n, status);
          }
        });
      }
      return updated;
    });
  };

  return (
    <ul>
      {data.map((node) => {
        const checked = isChecked(node);
        return (
          <li key={node.id} style={{ marginLeft: depth * 20 }}>
            <label>
              <input
                type="checkbox"
                checked={checked}
                ref={input => input && (input.indeterminate = isIndeterminate(node))}
                onChange={(e) => {
                  toggleNode(node, e.target.checked);
                }}
              />
              {node.type === "folder" ? <b>{node.name}</b> : node.name}
            </label>
            {node.children && (
              <CheckBoxTree
                data={node.children}
                selected={selected}
                setSelected={setSelected}
                depth={depth + 1}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default function App() {
  const [selected, setSelected] = useState({});
  const [submitData, setSubmitData] = useState([]);
  
  const handleSubmit = () => {
    const paths = [];
    const traverse = (node, path) => {
      if (selected[node.id]) {
        paths.push(path);
      }
      node.children?.forEach((child) => traverse(child, `${path}/${child.name}`));
    };
    directoryData.forEach((node) => traverse(node, node.name));
    setSubmitData(paths);
  };

  useEffect(() => {
    const initSelected = {};
    const initNodes = (nodes) => {
      nodes.forEach((node) => {
        initSelected[node.id] = false;
        if (node.children) {
          initNodes(node.children);
        }
      });
    };
    initNodes(directoryData);
    setSelected(initSelected);
  }, []);

  return (
    <div>
      <CheckBoxTree data={directoryData} selected={selected} setSelected={setSelected} />
      <button onClick={handleSubmit}>Submit</button>
      <ul>
        {submitData.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  );
}
