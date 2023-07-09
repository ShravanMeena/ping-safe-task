import React from "react";

export default function CheckBoxTree({
  data,
  selected,
  setSelected,
  depth = 0,
}) {
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
                ref={(input) =>
                  input && (input.indeterminate = isIndeterminate(node))
                }
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
}
