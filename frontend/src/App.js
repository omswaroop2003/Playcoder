// src/App.js
import React, { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import PackageManager from "./components/PackageManager";

const App = () => {
  const [code, setCode] = useState(`console.log("Hello, world!");`);
  const [packages, setPackages] = useState([]);

  const handleAddPackage = (name, version) => {
    setPackages([...packages, { name, version }]);
  };

  return (
    <div className="app-container">
      <h1>Playcode Clone</h1>
      <div className="top-section">
        <Editor code={code} setCode={setCode} />
        <PackageManager onAddPackage={handleAddPackage} />
      </div>
      <Preview code={code} />
    </div>
  );
};

export default App;
