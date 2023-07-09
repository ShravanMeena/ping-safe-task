import {useEffect, useState} from 'react';
import { directoryData } from '../data';

function useAppBusinessLogic() {
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
  
  return {
    handleSubmit,
    selected,
    setSelected,
    submitData
   
  };
}

export default useAppBusinessLogic;