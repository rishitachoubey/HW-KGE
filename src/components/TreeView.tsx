import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./style.scss";


import React, { useState, useEffect, useRef } from "react";
import { Tree } from "primereact/tree";
import { Toast } from "primereact/toast";
import { NodeService } from "./NodeService";

const TreeView = () => {
  const [nodes, setNodes] = useState(null);

  const [selectedKeys3, setSelectedKeys3] = useState(null);
  const toast = useRef(null);
  const nodeService = new NodeService();

  useEffect(() => {
    nodeService.getTreeNodes().then((data) => setNodes(data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Toast ref={toast} />
      <div className="card">
        <h5>Checkbox Selection</h5>
        <Tree
          value={nodes}
          selectionMode="checkbox"
          selectionKeys={selectedKeys3}
          onSelectionChange={(e) => setSelectedKeys3(e.value)}
        />
      </div>
    </div>
  );
};
export default TreeView;
